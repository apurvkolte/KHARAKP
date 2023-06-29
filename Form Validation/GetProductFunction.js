//Get all products => /api/v1/products?keyword=apple
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 8;
  let productsCount;
  let products;
  let productImages = [];
  let filteredProductsCount;
  var imagesData = [];

  const query = util.promisify(connection.query).bind(connection);
  let result = async function () {
    try {
      const find = req.query.keyword || "";
      const category = req.query.category;
      const queryStr = req.query.page;
      const currentPage = Number(queryStr) || 1;
      const skip = resPerPage * (currentPage - 1);
      const ratings = req.query.ratings.gte;
      const discountPriceLTE = req.query.discountPrice.lte;
      const discountPriceGTE = req.query.discountPrice.gte;
      const sort = req.query.sort;

      var sortValue = '';
      if (sort) {
        if (sort === 'DescTop') {
          sortValue = 'top Desc';
        }
        if (sort === 'Asc') {
          sortValue = 'sale_price Asc';
        }
        if (sort === 'Desc') {
          sortValue = 'sale_price Desc';
        }
      }

      // console.log("find", find);
      // console.log("category", category);
      // console.log("ratings", ratings);
      // console.log("discountPriceGTE", discountPriceGTE);
      // console.log("discountPriceLTE", discountPriceLTE);
      // console.log("sort", sort);
      // console.log("sortValue", sortValue);

      if (find || category || ratings > 0 || discountPriceGTE > 1) {
        if (category) {
          if (find || ratings > 0) {
            var sql = `SELECT * FROM products WHERE (name LIKE '%${find}%' or description Like '%${find}%')
              AND category="${category}" AND sale_price BETWEEN ${discountPriceGTE} AND ${discountPriceLTE}
              AND ratings >=${ratings} order by ${sortValue ? sortValue : "id"} limit ${resPerPage} offset ${skip} `;
            var rows = await query(sql);
          } else {
            var sql = `SELECT * FROM products WHERE category="${category}" order by ${sortValue ? sortValue : "id"};`;
            var rows = await query(sql);
          }
        } else {
          var sql = `SELECT * FROM products WHERE (name LIKE '%${find}%' or description Like '%${find}%')
              AND sale_price BETWEEN ${discountPriceGTE} AND ${discountPriceLTE}
              AND ratings >=${ratings} order by ${sortValue ? sortValue : "id"} limit ${resPerPage} offset ${skip} ; `;
          var rows = await query(sql);
        }
      } else {
        var sql = `SELECT * FROM products WHERE name LIKE '%${find}%'or description Like '%${find}%' limit ${resPerPage} offset ${skip}`;
        var rows = await query(sql);
      }

      var sql2 = `select * from images;`;
      var rows2 = await query(sql2);
      productImages = rows2;
      // console.log("sql", sql);
      // console.log(productImages);

      productImages.map((path) => {
        // imagesData.push(fs.readFileSync(path.path));
        // imagesData.push({
        //   id: path.id,
        //   product_id: path.product_id,
        //   imageName: path.imageName,
        //   path: path.path,
        //   content: fs.readFileSync(path.path),
        // });
      });

      // console.log(imagesData);

      productsCount = rows2.length;
      products = rows;
      filteredProductsCount = products.length;
    } catch (err) {
      console.log(err);
      return next(new ErrorHandler(err.message, 404));
    } finally {
      return [products, productsCount, filteredProductsCount, productImages];
    }
  };
  result()
    .then(
      (value = async () => {
        res.status(200).json({
          success: true,
          count: products.length,
          productsCount,
          resPerPage,
          filteredProductsCount,
          products,
          productImages,
          imagesData,
        });
      })
    )
    .catch((error) => {
      console.log("All products are not showing :-", error.message);
    });
});