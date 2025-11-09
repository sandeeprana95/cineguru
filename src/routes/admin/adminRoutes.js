export const LOGIN_ROUTE = "/admin";
export const DASHBOARD_ROUTE = "/admin/dashboard";
export const SETTING_ROUTE = "/admin/setting";
export const SERVER_INFO_ROUTE = "/admin/server-info";
export const PROFILE_ROUTE = "/admin/profile";
export const LEDGER_ROUTE = "/admin/ledger";
export const COLLECTION_ROUTE = "/admin/collection-history";
export const OTP_ROUTE = "/admin/otps";


export const VENDOR_ROUTE ="/admin/vendor"
export const SUPER_ADMIN_ROUTE ="/admin/super-admin"
export const ADMIN_ROUTE ="/admin/admin"
// address
export const COUNTRY_ROUTE ="/admin/country"
export const STATE_ROUTE ="/admin/state"
export const CITY_ROUTE ="/admin/city"


export function INVOICE_ROUTE(id) {
  return `/admin/invoice/${id}`;
}
export function INVOICE_PARTNER_ROUTE(id) {
  return `/admin/invoice-partner/${id}`;
}