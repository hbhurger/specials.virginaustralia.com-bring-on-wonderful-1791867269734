if(typeof _cls_config === "undefined") _cls_config = {};

/* BEGIN ajax */
_cls_config.ajaxRecordMetadata="never";
_cls_config.ajaxRecordRequestBody="uriMatches(graphql)";
_cls_config.ajaxRecordRequestHeaders="and(statusgte(400),tld)";
_cls_config.ajaxRecordResponseBody="uriMatches(graphql)";
_cls_config.ajaxRecordResponseHeaders="and(statusgte(400),tld)";
_cls_config.interceptAjax=true;
_cls_config.ajaxRecordStats="always";
_cls_config.webVitalsRecordEnabled = true;
_cls_config.forceHookFetch=false; //00056497 set to false
/* END ajax */

/* Ajax masking */
_cls_config.ajaxMaskRequestBody = [{
    predicate: "uriMatches(graphql)",
    transformations: 
    [
        {
            type: "jsonfield",
            search: "reloc",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "firstName",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "lastName",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "emails",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "gender",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "number",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "dob",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "dateOfBirth",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "prefix",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "addresses",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "membershipID",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "accountBalance",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "frequentFlyers",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "userCreditCards",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "accountNumber",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "travelBankDetails",
            replace: "XXX"
        }
    ]
}];

_cls_config.ajaxMaskResponseBody = [{
    predicate: "uriMatches(graphql)",
    transformations: 
    [
        {
            type: "jsonfield",
            search: "reloc",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "firstName",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "lastName",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "emails",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "gender",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "number",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "dob",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "dateOfBirth",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "prefix",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "addresses",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "membershipID",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "accountBalance",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "frequentFlyers",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "userCreditCards",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "accountNumber",
            replace: "XXX"
        },
        {
            type: "jsonfield",
            search: "travelBankDetails",
            replace: "XXX"
        }
    ]
}];

/*BEGIN MASKING*/
//Value Masking (INPUT)
_cls_config.valueMaskingMode = "whitelist";
_cls_config.maskWhitelistValueById = []; //Everything is masked EXCEPT FOR listed inputs that match an Id , This is only applied when valueMaskingMode is set to 'whitelist'
_cls_config.maskBlacklistValueById = []; //Only listed inputs with a matching Id are masked , This is only applied when valueMaskingMode is set to 'blacklist'.
_cls_config.maskWhitelistValueByClass = ['gb_unmask']; //Everything is masked EXCEPT FORlisted inputs that match a class , This is only applied when valueMaskingMode
_cls_config.maskBlacklistValueByClass = ['pii-data']; //Only listed inputs with a matching Class are masked , This is only applied when valueMaskingMode is set to 'blacklist'.
_cls_config.valueWhitelistMaskSimpleSelector = ["[data-mask-off]"]; //EVERYTHING is masked EXCEPT FOR this list of selectors , This is only applied when valueMaskingMode is set to 'whitelist'.
_cls_config.valueBlacklistMaskSimpleSelector = ["[data-mask]"]; //Only listed inputs with a matching selector are masked. , This is only applied when valueMaskingMode is set to 'blacklist'.

//DOM Masking
_cls_config.domMaskingMode = "blacklist";
_cls_config.domWhitelistMaskContentById = []; //ALL text is masked EXCEPT FOR this list of Ids. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'whitelist'.
_cls_config.domBlacklistMaskContentById = []; //ONLY text matched to this list of Ids is masked. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'blacklist'.
_cls_config.domWhitelistMaskContentByClass = []; //ALL text is masked EXCEPT FOR this list of classes. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'whitelist'.
_cls_config.domBlacklistMaskContentByClass = ['gb_mask', 'pii-data','passenger-name','embeddedServiceLiveAgentStateChatPlaintextMessageDefaultUI']; //ONLY text matched to this list of classes is masked. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'blacklist'.
_cls_config.domWhitelistMaskSimpleSelector = ["[data-mask-off]"]; //ALL text is masked, EXCEPT FORthe listed selectors. This is only applied when domMaskingMode is set to 'whitelist'.
_cls_config.domBlacklistMaskSimpleSelector = [
"[data-testid='user-logged-in-menu'] > .rocket-button-tertiary > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)",
"[data-testid='user-logged-in-menu-details'] > div:nth-child(1)",
"[ng-bind='::reservation.guestName']",
"[ng-bind='emailAddress']",
"[data-testid='confirmation-primary-driver'] > p",
"[data-testid='receipt-primary-driver'] > p",
"[data-testid='user-reservation-card'] > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div > div",
"[data-testid='confirmation-text'] > p",
".media-body.hotel-body > p:nth-child(4)",
"[reservation='vm.reservation'] > .rm-datatable > div:nth-child(2) > .rm-datatable-cell.text-right.value",
"div > div.src-components-GlobalHeader-LoginModule-MemberInfo-MemberInfo-module__nameText--3RahN",
".pii-data", 
".short-name",
"[data-testid='label-view-firstName']",
"[data-testid='label-view-lastName']",
"[data-testid='label-view-emailAddress']",
"#accordion-baseFare",
".credit-card-summary-row",
".profile > span[data-translation='account.fullName']",
"[data-mask]"
]; //ONLY text matched to this list of selectors is masked.This is only applied when domMaskingMode is set to 'blacklist'.

_cls_config.domMaskedAttributes=["aria-label", "aria-describedby","placeholder","href"];
_cls_config.domMaskAttributesByTag=["BUTTON","INPUT","a","I"];
_cls_config.maskQueryParameters=['pnr','lastName','firstName','surname'];
_cls_config.sendTopURL=true;
/*END MASKING*/

_cls_config.iframesAutoInject=true;
_cls_config.recordShadowDom=true;
_cls_config.recordMouseMoves=true;
_cls_config.recordScrolls=true;
_cls_config.recordHovers=true;
_cls_config.recordAnimation=true;
_cls_config.domRecordCssProps = true;
//_cls_config.domPreciseStyleSheetCloning=true; 11092022
_cls_config.enableAdoptedCss = true;

_cls_config.resourcesRecordEnabled = true;
_cls_config.resourcesRecordCount = 5;
_cls_config.resourcesRecordChance = 1;
//_cls_config.resourcesRecordAllowCors = true; //00062557
_cls_config.resourceRecordCssOnly = false;

_cls_config.clientAttributesEnabled=true;
_cls_config.clientAttributeMaxLength=500;
_cls_config.domIncludeCSSSelector=true;

_cls_config.collectStruggles=true;

/* BEGIN page performance */
_cls_config.resourceTimingRecordEnabled=true;
_cls_config.resourceTimingRecordEnabledByChance=0.05;

/* BEGIN console warn */
_cls_config.recordConsoleWarn=true;
_cls_config.recordConsoleInfo=true;
/* END console warn */

/* BEGIN form tracking im */
_cls_config.domFormAnalysisReporting=true;
_cls_config.domFormValidationTracking=true;
//_cls_config.domFormValidationAllowFormLevel=true;
_cls_config.maskFormValidationErrors=true;
/* END form tracking im */

/* BEGIN scroll tracking im */
_cls_config.recordScrollReach=true;

/*allows intercepting Adobe third party beacons that are sent via GET / POST*/
_cls_config.interceptThirdPartyAttributes=true;
_cls_config.reportEventsImmediately = ['thirdPartyAttribute', 'glassvoxOpen', 'glassvoxResponse', 'glassvoxClose', 'glassvoxComplete', 'pageSnapshot'];
_cls_config.interceptThirdPartyAttributesDefaultUrlsPatterns=["/b/ss"];

/*Adobe Target integration*/
_cls_config.interceptABTesting=true;
_cls_config.interceptAdobeABEvent=true;
_cls_config.abTestingGlobalObject="ttMeta"

_cls_config.SCIntegration = true;
_cls_config.SCIntegrationURLsContainList = ["/b/ss"];
_cls_config.SCIntegrationKeyList = ["events","v7","v37","v72","v95","v113","v114","v129","v135","v191"];

_cls_config.reportInterval=50;
_cls_config.reportLastPageEventsViaBeaconAPI=true;
//_cls_config.flushEventsOnClick=true;// Removed du to #00071962

_cls_config.blackoutWhenLocationContains=['icmpid=nondxexcl','hotels/user/reservations','hotels/receipt/','car-hire/receipt/'];

_cls_config.domFormValidationIgnorableText=["review","virgin","option","current","optional","cancel","manage","find","learn","travel","privecy","city","link","results","eligibility","address","go to","Phone","my","focused","Change card"];

//Ticket 172196
_cls_config.allowWaitForElementsUrls=["https://book.virginaustralia.com/dx/VADX/#/flight-selection*"];
_cls_config.snapshotWaitForElement=['.dxp-title.dxp-view-title', '.date-selection-month-label'];
_cls_config.recordSpaLoadTime=true;
_cls_config.waitForSegmentRender=3000; //Reduced from 5000->3000 due to #00071962
//00061530
_cls_config.captureQueryStringParamsOnSegmentChange = true;

// 72669
_cls_config.captureGlobalObjects=[
    "webAnalytics.aaLog.eVar1",
    "webAnalytics.aaLog.eVar4",
    "webAnalytics.aaLog.eVar5",
    "webAnalytics.aaLog.eVar6",
    "webAnalytics.aaLog.eVar7",
    "webAnalytics.aaLog.eVar8",
    "webAnalytics.aaLog.eVar9",
    "webAnalytics.aaLog.eVar12",
    "webAnalytics.aaLog.eVar13",
    "webAnalytics.aaLog.eVar16",
    "webAnalytics.aaLog.eVar17",
    "webAnalytics.aaLog.eVar18",
    "webAnalytics.aaLog.eVar19",
    "webAnalytics.aaLog.eVar20",
    "webAnalytics.aaLog.eVar21",
    "webAnalytics.aaLog.eVar21",
    "webAnalytics.aaLog.eVar23",
    "webAnalytics.aaLog.eVar24",
    "webAnalytics.aaLog.eVar25",
    "webAnalytics.aaLog.eVar26",
    "webAnalytics.aaLog.eVar28",
    "webAnalytics.aaLog.eVar32",
    "webAnalytics.aaLog.eVar36",
    "webAnalytics.aaLog.eVar37",
    "webAnalytics.aaLog.eVar39",
    "webAnalytics.aaLog.eVar41",
    "webAnalytics.aaLog.eVar43",
    "webAnalytics.aaLog.eVar60",
    "webAnalytics.aaLog.eVar61",
    "webAnalytics.aaLog.eVar64",
    "webAnalytics.aaLog.eVar65",
    "webAnalytics.aaLog.eVar67",
    "webAnalytics.aaLog.eVar72",
    "webAnalytics.aaLog.eVar76",
    "webAnalytics.aaLog.eVar77",
    "webAnalytics.aaLog.eVar78",
    "webAnalytics.aaLog.eVar87",
    "webAnalytics.aaLog.eVar89",
    "webAnalytics.aaLog.eVar95",
    "webAnalytics.aaLog.eVar105",
    "webAnalytics.aaLog.eVar110",
    "webAnalytics.aaLog.eVar115",
    "webAnalytics.aaLog.eVar117",
    "webAnalytics.aaLog.eVar118",
    "webAnalytics.aaLog.eVar125",
    "webAnalytics.aaLog.eVar126",
    "webAnalytics.aaLog.eVar129",
    "webAnalytics.aaLog.eVar131",
    "webAnalytics.aaLog.eVar133",
    "webAnalytics.aaLog.eVar134",
    "webAnalytics.aaLog.eVar141",
    "webAnalytics.aaLog.eVar143",
    "webAnalytics.aaLog.eVar146",
    "webAnalytics.aaLog.eVar147",
    "webAnalytics.aaLog.eVar151",
    "webAnalytics.aaLog.eVar155",
    "webAnalytics.aaLog.eVar156",
    "webAnalytics.aaLog.eVar158",
    "webAnalytics.aaLog.eVar159",
    "webAnalytics.aaLog.eVar162",
    "webAnalytics.aaLog.eVar170",
    "webAnalytics.aaLog.eVar191",
    "webAnalytics.aaLog.eVar195",
    "webAnalytics.aaLog.event526",
    "webAnalytics.aaLog.event528",
    "webAnalytics.aaLog.pageName",
    "webAnalytics.aaLog.products",
    "webAnalytics.aaLog.pageURL",
    "webAnalytics.aaLog.events"
];
_cls_config.captureGlobalObjectsOnSegmentChange=true;


// 194546
_cls_config.saveChancesByCookie = true;
//194546
_cls_config.enableSessionizingByCors=true;

// 00056496
_cls_config.clientAttributeMaxMutations=5;
_cls_config.clientAttributeFuseWaitTime=1000;

//52803:
// Select the element with the given selector
var element = document.querySelector(".fsPanelControllerWrapper.src-app-FlightSearchApp-structure-layoutControllers-PanelController-PanelController-module__fsPanelControllerWrapper--Vf1z3");

if (element) { // Check if the element exists
    // Check the innerText condition
    if (element.innerText.includes("Fly from")) {
        // If both conditions are met, set the configuration
        _cls_config.maxAggregateLookup = 2;
    }
}

/*Fingerprint*/
//Removed Due to #00071962
//_cls_config.useFingerprint = true;
//_cls_config.reportEndpoint = "https://report.virginau.gbqofs.io/reporting/d4e7556a-aed6-422f-adfd-9ba96cc8f662/cls_validation";

/* BEGIN V7 detector requirements */
_cls_config.reportURI = "https://report.virginaus.gbqofs.io/reporting/d4e7556a-aed6-422f-adfd-9ba96cc8f662/cls_report";
_cls_config.initDetectorOnInteractive = true;
_cls_config.detectorPath = 'https://cdn.gbqofs.com/virginau/common/p/';
/* End V7 detector requrements */