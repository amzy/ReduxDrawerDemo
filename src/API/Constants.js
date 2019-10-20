export default class Constants {
    static  kAppDisplayName              = "Your App Name"
    static  kAppVersion                  = "Your App Version"
    static  kPerPage                     = 20
    static  kGoogleAPIKey                = ""
    static  kAPIVersion                  = "1.0"
    static  kAuthAPIKey                  = ""
    static  kDeviceType                  = "i"
    
    static  kHeaders = { "X-API-KEY":   Constants.kAuthAPIKey,
                          "Device-Type": Constants.kDeviceType,
                          "App-Version": Constants.kAppVersion,
                          "Api-Version": Constants.kAPIVersion }
}
