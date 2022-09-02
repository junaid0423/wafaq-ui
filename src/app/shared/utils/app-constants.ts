import { environment } from "src/environments/environment";

export class AppConstants {

  // Account Routes
  public static ACCOUNTS = "account";
  public static ACCOUNTS_LIST = "account";
  public static DELETE_ACCOUNT = "delete";
  public static UPDATE_ACCOUNT = "update";
  public static USERS_BY_ACCOUNT_ID = "account_user";
  public static MODIFY_LINKED_USER = "user_account";

  // User Routes
  public static USERS = "user";
  public static USERS_LIST = "user";
  public static DELETE_USER = "user";
  public static UPDATE_USER = "update";
  public static CREATE_USER = "create";
  public static SEARCH_USERS = "user_account";

  //Permissions Route
  public static PERMISSION = "permission";
  public static MY_PERMISSION = "my_permission";

  //Roles Route

  public static ROLES = "role";
  public static ROLES_LIST = "role";
  public static CREATE_ROLE = "create";

  //Roles Advertiser
  public static ADVERTISER = "advertiser";
  public static VERTICAL = "vertical";
  public static ACCOUNT_ADVERTISER = "account_advertiser";
  public static TIMEZONE_DETAILS = "timezone_details";
  public static AUDIENCEW_FILE_PATH = "audience_file_path";


  // SFTP Route
  public static SFTP = "sftp";
  public static ACCOUNT_SFTP = "account_sftp";

  // S3 Route
  public static S3 = "s3";
  public static ACCOUNT_S3 = "account_s3";

  // Details Route

  public static INSTALL = "install";
  public static ACCOUNT_INSTALL = "account_install";

  //Sender Profiles

  public static SENDER_PROFILES = "sender_profile";

  // Audience

  public static AUDIENCE = "audience";
  public static EMAIL_ACCOUNT = "email_account";
  public static ACCOUNT_AUDIENCE = "account_audience";
  public static AUDIENCE_DETAILS = "audience";
  public static AUDIENCE_FILE = "audience/file";

  //CAMPAIGN
  public static CAMPAIGN_CREATIVE = "ccm_creative";
  public static CAMPAIGN_CREATIVE_ACCOUNT = "ccm_creative_account";
  public static CAMPAIGN_CREATIVE_TYPE = "ccm_creative_type";
  public static EMAIL_CLIENT = "ccm_email_client_creative";
  public static EMAIL_LINK = "ccm_email_link_creative";
  public static SEED_LIST = "ccm_seed_list";
  public static PREVIEW_HTML = "html";

  // Orders
  public static ORDERS = "order";
  public static LOOKER = "looker";
  public static PRODUCT = "product";
  public static LAUNCH = "launch";
  public static PRODUCT_RATE = "product_rate";
  public static PRODUCT_RESPONSE = "product_response";

  // Task Routes

  public static TASK = "task";
  public static TASK_FILE_CONTENT = "audience_file_content";
  public static BUDGET_CHANGE = "budget_impression_change";
  public static CREATIVE_CHANGES = "creative_change";
  public static CUSTOM_REPORTING_REQUEST = "custom_reporting_request";
  public static SCREENSHOT_DISPLAY = "screenshot_display";
  public static SCREENSHOT_SOCIAL = "screenshot_social";
  public static VENDOR_TAG_IMPLEMENTATION = "vendor_tag_implementation";
  public static CREATIVE_DESIGN_REQUEST = "creative_design_request";
  public static CREATIVE_REQUEST_REVISION = "coding_request_revision";
  public static CREATIVE_DESIGN_REVISION = "creative_design_revision";
  public static S3_SFTP_SETUP = "s3_sftp_setup";
  public static DATA_VALIDATION = "data_in_validation_and_analysis";
  public static MOBILE_COUNT = "mobile_count";
  public static MOBILE_EXPORT = "mobile_export";
  public static OTHER_AD_HOC = "other_ad_hoc";
  public static DATA_ONBOARDING = "data_onboarding";
  public static TASK_RESPONSE_DATA = "response_data";
  public static ORDER_SUCCESS_MATCHBACK = "order_success_matchback";
  public static DATA_TRANSFORMATIONS = "data_transformation";
  // File

  public static FILE = "file";

  public static OK = "ok";
  public static NOK = "nok";
  // Actions
  public static EDIT = "edit";
  public static VIEW = "view";
  public static CREATE = "create";
  public static DELETE = "delete";
  public static SUCCESS = "success";
  public static CONFIRM = "confirm";

  public static PAGINATION = "pagination";
  public static DOWNLOAD = "download";

  // Errors

  public static PRIMARY = "primary";
  public static SECONDARY = "secondary";
  // public static SUCCESS = "success"; ALREADY EXISTS CAN BE REUSE
  public static DANGER = "danger";
  public static WARNING = "warning";
  public static INFO = "info";
  public static LIGHT = "light";
  public static DARK = "dark";

  // File Upload Flags

  public static FILE_ADVERTISER_TEST = "advertiser_test_csv";
  public static FILE_ADVERTISER_LIVE = "advertiser_live_csv";
  public static FILE_ADVERTISER_BANNER = "advertiser_banner";
  public static FILE_CREATIVE_HTML = "creative_html";
  public static FILE_CREATIVE_TEST = "creative_test_seed_list_csv";
  public static FILE_CREATIVE_LIVE = "creative_live_seed_list_csv";
  public static FILE_CREATIVE_BANNER = "creative_banner";
  public static FILE_AUDIENCE = "audience_csv";
  public static FILE_ACCOUNT_LOGO = "account_logo";
  public static FILE_TASK = "task_csv";
  public static FILE_C_D_RV_L = "creative_design_revision_logo";
  public static FILE_C_D_RQ_L = "creative_design_request_logo";
  public static FILE_C_D_RQ_A = "creative_design_request_additional";
  public static FILE_C_D_RV_A = "creative_design_revision_additional";
}
