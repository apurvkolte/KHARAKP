
"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "./userCard";

export default function Login() {

    //get session
    const { data: session } = useSession();
 
    //useSession  use react context

    //if the user exist --> show th sign out button & thier information
    if (session) {
        return (
            <>
                <button onClick={() => signOut()} type="button" className="btn btn-primary">Sign Out of Google</button>
                <UserCard user={session?.user} />
            </>            
        )
    } else {
        return (
            <>
                <button onClick={()=>signIn()} type="button" className="btn btn-primary">Sign In of Google</button>
            </>            
        )
    }

}
