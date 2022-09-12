import { auth, firestore, googleAuthProvider } from "../lib/firebase";
import { UserContext } from "../lib/context";
import { useEffect, useState, useCallback, useContext } from "react";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";

export default function Testing(props) {
  const { user, username } = useContext(UserContext);
  const router = useRouter();
  const { pid } = router.query;
  console.log(router);
  // const user = null;
  // const username = null;

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />

  return <main>This is testing page {pid}</main>;
}

