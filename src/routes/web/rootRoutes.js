export const HOME_ROUTE = "/";
export const CART_ROUTE = "/cart";
export const WISHLIST_ROUTE = "/wishlist";
export const CHECKOUT_ROUTE = "/checkout";
export const LOGIN_ROUTE = "/auth/login";
export const ABOUT_ROUTE = "/about";
export const CONTACT_ROUTE = "/contact";
export const REGISTER_ROUTE = "/auth/signup";
export const SHOP_ROUTE = "/shop";
export const PRIVACY_POLICY_ROUTE = "/privacy-policy";
export const TERMS_CONDITION_ROUTE = "/terms-and-conditions";
export const REFUND_POLICY_ROUTE = "/refund-policy";
export const WARRANTY_POLICY_ROUTE = "/warranty-policy";
export const BUYING_FAQ_ROUTE = "/faqs";
export const SHIPPING_POLICY_ROUTE = "/shipping-policy";


export const OREDR_ROUTE = "/user/orders";
export const PRODUCTS_ROUTE = "/user/products";
export const LEDGER_ROUTE = "/user/my-balance";
export const DASHBOARD_ROUTE = "/user/dashboard";
export const COLLECTION_ROUTE = "/user/colleaction-history";

export const USER_OREDR_ROUTE = "/orders";
export const USER_DASHBOARD_ROUTE = "/my-account";

export const TRACK_ROUTE = '/track-your-application';
export const DOWNLOAD_FORM_ROUTE = '/download-apply-form';
export const APPLY_FORM_ROUTE = '/apply-form';
export function FORM_ROUTE(type) {
  return `/apply-form/${type}`;
}


export const TRIBUTE_ROUTE = '/our-tributes';
export const ART_DIRECTION_ROUTE = '/living-legends-of-art-direction';
export const COSTUME_ROUTE = '/living-legends-of-costume-designer';

export const HISTORY_ROUTE = '/our-history';

export const MISSION_ROUTE = '/our-tributes';
export const GOALS_ROUTE = '/page/goals-objectives';
export const NOTIFICATION_ROUTE = '/notifications';

export const GENERAL_RULES_ROUTE = '/page/general-rules';
export const MEMBERSHIP_RULES_ROUTE = '/membership-terms';
export const CONDUCT_ROUTE = '/page/code-of-conduct';
export const RULES_ROUTE = '/rules';

export const PROFILE_ROUTE = "/member/profile";
export const DOWNLOAD_FORM_MEMBER_ROUTE = '/member/download-apply-form';
export const ID_ROUTE = '/member/id-card';
export const PASSWORD_ROUTE = '/member/change-password';


export function PRODUCT_ROUTE(id, slug) {
  return `/product/${id}/${slug}`;
}


export const MEMBER_DASHBOARD_ROUTE = "/member/dashboard";
export const MEMBER_PROFILE_ROUTE = "/member/profile";
