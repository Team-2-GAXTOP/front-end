import {supabase} from "../../utils/supabase";

export async function insertUserData(values, user) {
  const { zipcode, applyingAs, orgName, address, size, prevApplied, teamOfWriters, grantAmount, whyTextArea } = values
  const { data, error } = await supabase
  .from('user_profile')
  .insert([{ zipcode:zipcode, role: applyingAs, userID: user.id, amount: grantAmount }])
}