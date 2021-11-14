// how to know when a user is a valid user: their wallet address
// wallet address might be able to be spoofed, so we need to find a way to
// authenticate with both PASSWORD/TOKEN and ADDRESS

// also need functions on the blockchain that return whether an address is a patient or a doctor
// flow of auth:
// on login/sign up, remember me?: stretch goal
// receive token and expiry time from backend, set it
// on session start, check that

// 1. the token is present
// 2. the token has not expired
// 3. If one and two are valid, then ask blockchain whether this is a patient or an admin
// SOURCE OF TRUTH? ask backend or ask blockchain?
// EDGE CASE: the results are different? Defer to blockchain
// Issues with above flow: what if current logged in user has a different wallet address associated with
// their account/should they be able to change wallet address?: No. Wallet identifies them on the chain
// For now ^ We can try to check this, but no way to know userid based on token (OR IS THERE?)

// TODO: verify that we can get userid from token
// IF WE CAN
// step 2.5: verify that token_id is the same as id_by_address
// but by ethAddress yes
// once bidrectional mapping is established on backend

// so, get id by eth_address
import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPatient, setIsPatient] = useState(false);

  useEffect(() => {
    setIsAdmin(true);
    setIsPatient(false);
  }, []);

  return { isAdmin, isPatient };
};

export default useAuth;
