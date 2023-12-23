const currencyFormatter = Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 3,
});

export default currencyFormatter;

//{currencyFormatter.format(house.price)}
// const currencyFormatter = Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
//   maximumFractionDigits: 0,
// });

// export default currencyFormatter;
