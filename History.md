
0.21.0 / 2015-11-10
===================

  * Merge remote-tracking branch 'origin/add/send-sms' into development
  * Merge branch 'release-0.20.0' into development
  * Added ability to recover password with SMS
  * Bump node engine version to 4.2.1
  * [signup] - Update phone input to be [type=number]
  * [models:user] - Add DNI and phone to complete signup page
  * [signup] - Add resend validation email by SMS instead of email
  * [models:user] - Add DNI attribute
  * [signup] - Add send SMS to validate user

0.20.0 / 2015-11-10
===================

  * Merge branch 'add/phone' into development
  * [models:user] - Add phone number
  * Added keywords to proposal view. Closes #56
  * Fixed keywords format #56
  * Added Selectize to show fancier keywords #56
  * Made laws publishable only via its main law. Closes #54
  * [admin-laws-form] Fixed not showing unpublished laws in Primary Law selector. Closes #52
  * [admin-laws-form] Allow numbers in Party field. Closes #53
  * Fix facebook auth
  * Fix complete facebook signup
  * [facebook-auth] - Si alguien trata de hacer signup con fb y ya existe un usuario con ese email, muestra ese error en pantalla
  * [header] - Ocultar el link a Registrarse en la homepage
  * fix en.json wording on complete profile form
  * add profile completion form Closes #41
  * add complete profile form
  * restrict users with incomplete profile to the api
  * save jwt token by id, not email
  * allow users to signup with uncomplete profile
  * fix buttons styles
  * allow facebook signup alongside email
  * fix signup form styles
  * remove facebook signup blocking of email registration
  * Merge branch 'development' of github.com:DemocraciaEnRed/bahiablanca into development
  * imrpove tutorial Close #51
  * Merge branch 'add/author-twitter' into development
  * Agregar twitter handle (share) en la página de la ley. Modificar el ícono de twitter en la landing para cada autor #34
  * Arreglar sidebar para que sólo muestre las secciones del proyecto de ley padre que se está viendo actualmente. Close #50
  * Agregar mensaje final al cerrar el proyecto de ley. Close #47
  * Agregar usuarios oficiales. Close #48
  * Quedó una dependency de más #49
  * Arreglar el mostrar/ocultar header cuando está oculto y se cambia de página. Close #49
  * Agregar sección de 'Política de Privacidad'. Close #46
  * Agregar 'Términos y Condiciones'. Close #45
  * Update question mark background color
  * Avanzando con tos
  * Merge branch 'development' of github.com:DemocraciaEnRed/bahiablanca into development
  * Empezando con tos y pp
  * Merge branch 'development' of github.com:DemocraciaEnRed/bahiablanca into development
  * fix btn default styles
  * fix user-badge caret styles
  * fix home row
  * Merge branch 'development' of github.com:DemocraciaEnRed/bahiablanca into development
  * Update HugeOverlay text and button
  * Merge branch 'development' of github.com:DemocraciaEnRed/bahiablanca into development
  * change default font to Lato
  * Agregar tutorial
  * Esconder el sidebar menu en páginas que no sean de leyes
  * Merge branch 'development' of github.com:DemocraciaEnRed/bahiablanca into development
  * Fix acerca-de
  * remove law listing uppercase
  * fix font-size on law paragraphs
  * Merge branch 'development' of github.com:DemocraciaEnRed/bahiablanca into development
  * remove unnecesary paragraphs padding
  * Merge branch 'development' of github.com:DemocraciaEnRed/bahiablanca into development
  * Merge branch 'add/about-page' into development
  * [about] - Agregar la página de acerca de. Close #42
  * fix sidebar items line-height
  * Merge branch 'fix/comments' into development
  * [signin:facebook] - Fix getting email, first_name and last_name from Facebook
  * [models:law] - Add partyUrl. Close #44
  * [models:law] - Add twitter handler. Close #34
  * Merge branch 'add/party' into development
  * [models:law] - Add party attribute. Close #32
  * Added Open Sans and Merriweather fonts. Closes #38
  * Removed TypeKit #38
  * [landing] Sort randomly law cards. Closes #33
  * Merge branch 'development' into add/pages
  * Fixed bad summary parsing. Closes #36
  * [landing] - Hide law description on mobile. Close #37
  * [models:user] - Enable all notifications by default. Close #39
  * Added About page
  * Cleanup
  * Added Tutorial page
  * Changed logo
  * Terms and conditions link put on footer #26
  * Removed app name from header #26
  * Added header links #26
  * Deleted unwanted files
  * Removed accidentally added files
  * [facebook-strategy] Add profileFields key to passport strategy object
  * Merge branch 'fix/facebook-login' into add/facebook-login
  * [huge-overlay] A little bit more logging
  * [huge-overlay] Added ready event and preload smartly the background #28
  * Added image preloader #28
  * Added optional bg image to overlay. Closes #28
  * Added translations #30
  * [landing] Make laws filterable by keywords #30
  * [law] Added keywords field #30
  * Made Signin container wider #31
  * Added ToC acceptance message. Closes #31
  * [landing] Show readable text instead of HTML in law card
  * show a message to the user on facebook login error Closes #1001
  * dont allow to register fb users without email Closes #1001
  * Merge pull request #1000 from jacobmiller/patch-1
  * rm vot-it
  * Merge pull request #972 from galiumodorat/feature/Polish-translation
  * [landing] Refactor
  * [landing] Improved filters/sort buttons layout
  * [dropdown] Added ability to customize 'all' caption
  * [landing] Added 'no match' message. Closes #14
  * Merge pull request #25 from DemocraciaEnRed/fix-welcome-responsive
  * [landing] Made overlay container a little bit wider #24
  * Fix responsiveness of welcome message Closes #24
  * Merge branch 'fix-summary-on-landing' into development
  * Merge branch 'development' into fix-summary-on-landing
  * [sidebar] Fixed voted badge. Closes #20
  * fix responsiveness of summary text on landing Closes #11
  * [law] Fixed sidebar showing all laws when refreshing. Closes #19
  * [next-law-button] Removed sidebar dep
  * [law] Moved Next button between voting buttons and arguments. Closes #21
  * [sidebar] Fixed next button behavior on Introduction topic. Closes #22
  * [landing] Added footer. Closes #16
  * [l10n] Added ability to enforce a locale. Closes #18
  * [landing] Links in summary text opens in new tab. Closes #15
  * [sidebar] Added Introducción list item
  * [sidebar] Fixed colors #17
  * [sidebar] Fixed indentation and highlighted articles. Closes #17
  * [sidebar] Fixed gap on top of sidebar
  * [sidebar] Put the back button on bottom
  * [dropdown] Updated docs
  * [dropdown] [landing] Fix responsiveness of dropdown filter buttons
  * [landing] Replaced filters with dropdown component #13
  * Added dropdown component #13
  * [landing] Added translations. Closes #13
  * [landing] Added tag filter #13
  * [landing] Fixed breaking dropdown list with long strings #13
  * [landing] Added translations #13
  * [landing] Added author filter #13
  * Some corrections to the welcome text
  * Fixed huge-overlay link color
  * Merge branch 'development' into add/intro-overlay
  * Refactor
  * Refactor #12
  * Moved welcome overlay instance to boot to make it able to be shown in any page #12
  * Added welcome overlay. Closes #12
  * Added next button. Closes #6.
  * [landing] Added filter and sort. Closes #10.
  * [landing] Fix author name alignment
  * [landing] Fade out summary text
  * [landing] Center titles
  * [landing] Better placeholder for summary
  * [landing] Properly escape summary HTML
  * [laws] getParents should get only published laws
  * Merge pull request #8 from DemocraciaEnRed/add/landing
  * [sidebar] Show only related laws #2
  * [sidebar] Added Back button #2
  * [sidebar] Removed filters #2
  * Fixed page redirect to landing #2
  * Added landing page. Closes #2
  * Added translations #7
  * Changed color fields type #7
  * Added law fields: authorPictureUrl, styles and imageUrl. Closes #7
  * Added landing component #2
  * Merge pull request #3 from DemocraciaEnRed/add/parent-law
  * Fixed failure at creating law with no parent #1
  * Added translations #1
  * Fixed data-id attribute #1
  * Improved styles #1
  * added Polish translation
  * Added children laws to sidebar
  * Fixed law client-side filter
  * Fixed law select fields
  * Added order field
  * Add ability to set a parent law #1
  * Merge branch 'release-0.19.0' into development
  * Release 0.19.0
  * Add greek translation credit
  * add greek laguage name
  * add greek translations
  * add test option
  * add test option
  * fix dos-translate async processing
  * fix dos-translate directory pointing
  * fix dos-translate library
  * Merge branch 'release-0.18.0' into development
  * Release 0.18.0
  * Merge pull request #962 from fabriciodisalvo/patch-1
  * Added missing line for 'Chinese (Trad)' language
  * Added missing line for 'Chinese (Trad)' language
  * Update en.json
  * Update supported.js
  * Update zh_TW.json
  * Create zh_TW.json
  * add gitter link on CONTRIBUTING
  * Update license year
  * bump notifier-client dep version
  * Merge pull request #942 from fonorobert/update/accented-chars-in-names
  * add new accented chars to regex, closes #941
  * Merge branch 'fonorobert-add/config-showresults' into development
  * rename config.showResults to config.alwaysShowTopicResults
  * add local config reference to component.json
  * remove console.log statement
  * Merge branch 'add/config-showresults' of git://github.com/fonorobert/evoks into fonorobert-add/config-showresults
  * Merge branch 'master' into development
  * Release 0.17.6
  * update notifier-client to 0.3.0
  * fix wait for laws.loaded before rendering homepage
  * Fix homepage first law shown
  * Merge pull request #938 from DemocracyOS/fix-law-show
  * law page depend on laws bus, not on sidebar Closes #898
  * remove duplicated config key
  * Merge pull request #931 from DemocracyOS/fix-mobile-menu-icon
  * use headerFontColor on mobile menu icon Closes #930
  * add showResults config key and check it in proposal-options, closes #926
  * fix t() invoke on proposal-options.js
  * add .eslintrc file
  * Merge pull request #924 from a0viedo/patch-2
  * Merge pull request #925 from a0viedo/patch-3
  * added license in package.json
  * using relative links in readme
  * Merge branch 'master' into development
  * Release 0.17.5
  * Fix async of logout Closes #921
  * fix user token loading
  * Merge pull request #920 from DemocracyOS/fix-forgot-route
  * fix user verification
  * allow public access to /forgot routes Closes #919
  * Add email normalization Closes #689
  * Merge branch 'ben-pr-p-fix/668-no-msg-for-incorrect-pswd' into development
  * Merge branch 'fix/668-no-msg-for-incorrect-pswd' of https://github.com/ben-pr-p/app into ben-pr-p-fix/668-no-msg-for-incorrect-pswd
  * Merge branch 'master' into development
  * Release 0.17.4
  * Rename lib/translations/translations.js -> lib/translations/all.js
  * Merge branch 'development' into remove-deployment-domain
  * Merge branch 'fix-jwt-expiration' into remove-deployment-domain
  * Merge branch 'fix-clear-token' into remove-deployment-domain
  * Remove old token cookies
  * use passport-facebook strategy
  * test change token cookie name to token_jwt
  * test facebook login without redirection
  * Fix reload token
  * Fix reload token
  * Merge pull request #884 from DemocracyOS/fix-userswhitelist
  * Let signup STAFF members Closes #882
  * remove repeated usersWhiteList key
  * remove DEPLOYMENT_DOMAIN config.client Closes #873
  * remove DEPLOYMENT_DOMAIN config Closes #873
  * Update jwt token when is more than 1 day older Closes #874
  * Merge branch 'development' into fix-clear-token
  * Remove unused dependencies
  * Force bad cookie deletion Closes #871
  * merge with development
  * refactor jwt
  * Merge pull request #864 from DemocracyOS/add/cookie-httponly
  * [citizen] Keep logout async but don't wait for request completion to re-render UI #846
  * Merge pull request #862 from DemocracyOS/fix-list-comments
  * Merge pull request #867 from DemocracyOS/fix-facebook-signin-restrictions
  * Restric signin/up urls when facebookSingin is active. Closes #866
  * [citizen] Made all logout process asynchronous #846
  * Fix token cookie clearing on error
  * [citizen] Fixed callback invoking error #846
  * [signin] Cleanup #846
  * [signin] Implemented httpOnly cookie option and a signout endpoint. Closes #846.
  * Merge pull request #863 from fonorobert/update/translation/hungarian
  * Update Hungarian translation, resolve issue #809
  * Merge pull request #861 from DemocracyOS/fix/url-special-chars-validation
  * Merge branch 'development' into fix/url-special-chars-validation
  * Revert "[models:law] Removed validation of URLs in model-tier #834 840"
  * Fix side-comments on list elements Closes #852
  * Merge pull request #820 from DemocracyOS/update/reference-on-signup
  * [proposal-clauses] Fixed broken reference passing to SideComments #817
  * Merge branch 'development' into update/reference-on-signup
  * Merge branch 'master' into development
  * [validators] Added support for accented characters in URLs. Closes #840
  * [regexps] Added support for ':' character in URLs. Closes #834
  * [models:law] Removed validation of URLs in model-tier #834 840
  * Release 0.17.3
  * fix xss-filter defaults
  * Merge pull request #835 from DemocracyOS/locale-refactor
  * Merge pull request #857 from DemocracyOS/fix/gravatar-not-shown
  * Merge pull request #856 from DemocracyOS/fix/remove-comment-confirmation
  * Merge pull request #859 from DemocracyOS/fix-embed-videos
  * Fix embed videos protocol #855
  * add .npmrc to .gitignore
  * [user] Created a unique property 'avatar' to get user's image. Closes #854
  * [comment-card] Fixed overflow on remove confirmation box. Closes #850.
  * Merge branch 'master' into development
  * Release 0.17.2
  * update DemocracyOS/side-comments version
  * Merge pull request #841 from DemocracyOS/fix/learn-more-url
  * Merge pull request #836 from DemocracyOS/fix/broken-videos
  * Merge branch 'development' into fix/broken-videos
  * [xss] Refactor #839
  * Merge pull request #847 from Irene27/patch-1
  * Small fix to Spanish translation
  * Fix xss for law summary #836
  * Merge pull request #844 from DemocracyOS/fix/delete-link-confirmation
  * [admin-laws] Stop using component/confirmation#focus() #838
  * [confirmation] Fixed component/confirmation styles #838
  * [config] Set default value null for learnMoreUrl. Closes #837
  * Fix typo in log require
  * Fix translation used for debug
  * [law] Added iframes to xss whitelist
  * Default translations 'en' <- 'config.locale' <- 'user.locale' Closes #828
  * Set user locale on signup Closes #828
  * Fix cookie delete on logout Closes #811
  * Fix require config on citizen model
  * Remove debugger statement
  * Merge branch 'master' into development
  * Release 0.17.1
  * Merge pull request #827 from DemocracyOS/add/header-box-shadow
  * Fix horrible translation on spanish
  * add headerContrast config
  * remove useless vars
  * Merge pull request #807 from DemocracyOS/fix/side-comments
  * Fix side comments load #807
  * Merge pull request #810 from DemocracyOS/fix/richtext-center-formatting
  * Merge branch 'master' into development
  * Release 0.17.0
  * Merge pull request #822 from DemocracyOS/consolidate-tls
  * Fix ssl redirection middleware
  * Fix js code returns on ssl.js
  * add server factory that handles TLS Closes #821
  * [signup] Added reference URL to side-comments Sign up feature #817
  * Allow style attribute on law summary Closes #810
  * [signup] - Update reference link to include the whole pathname, not only the law id #817
  * Merge pull request #808 from DemocracyOS/add/languages-fallback
  * Add missing translations for 'Hungarian' language #794
  * Merge branch 'development' into add/languages-fallback
  * Fix locales texts in <select>. Fix selecting current locale #794
  * Dont reload when the user has not locale setted
  * js styleguide fixes
  * Merge pull request #815 from DemocracyOS/add/facebook-login-form
  * Merge branch 'development' into add/facebook-login-form
  * [config] - Remove privatePort. App will launch on publicPort and you can access it via  env variable or else via publicPort itself (if not port-redirected as it would be with ) #788
  * remove unused 't' component on Law model
  * remove URIComponent encoding
  * Merge pull request #805 from DemocracyOS/fix/gravatar-https
  * facebook login form Closes #789
  * [facebook] Fixed user picture URL binding #711
  * Fix settings-api password error response #668
  * [proposal-article] Decode summary string. Closes #754
  * [richtext] Encode and decode contents string. Closes #754
  * Fix assigment of facebook avatar
  * Revert "added japanese"
  * removed console print statements
  * removed extra line added
  * changed tabs to spaces
  * Add error handler for incorrect current password
  * fixed bug where JSON.parse was being called on non-JSON data
  * undid data additions
  * added japanese
  * re-add reverted facebook refactor #788
  * Fallback missing translations Closes #794
  * Remove extra translation keys
  * [proposal-clauses] Fixed saved side comments not being shown. Closes #759
  * Merge branch 'release-0.16.2' into development
  * Release 0.16.2
  * Merge branch 'master' into development
  * Release 0.16.1
  * Merge pull request #804 from DemocracyOS/fix/https-crash
  * Fix users whitelist configuration Closes #806
  * Merge branch 'fix/https-crash' into fix/gravatar-https
  * [https] Fixed variable redefinition that causes app to crash in HTTPS mode. Closes #803
  * [models:user] Remove avatar property #711
  * Update default notifications token
  * Merge branch 'master' into development
  * Update package.json version
  * Release 0.16.0
  * Fix spanish translations
  * Merge pull request #767 from kant/patch-2
  * Merge pull request #784 from Situphen/improves-french-translations
  * Fix l10n/supported.js languages order
  * Fix hu.json indentation
  * Merge pull request #793 from fonorobert/translation/hungarian
  * Fix config.notifications.token default value
  * Add Hungarian language file
  * Improves french translation
  * Merge pull request #741 from DemocracyOS/add/private
  * Merge pull request #790 from DemocracyOS/revert-788-update/facebook-login
  * Revert "Update/facebook login"
  * Merge pull request #788 from DemocracyOS/update/facebook-login
  * merge with development
  * Remove method for development
  * Fix facebook deauthorization #786
  * Add deauthorize callback for facebook Closes #786
  * Fix translations folder
  * Refactor auth/facebook
  * Remove /login route
  * Merge with origin
  * Rename facebook 'scope' to 'permissions'
  * Fix translations require
  * Add configurable facebook app scope Closes #785
  * Fix l10n configuration
  * Fix translations require
  * Add configurable facebook app scope Closes #785
  * Merge pull request #734 from DemocracyOS/add/i18n
  * [l10n] Update hard redirect only when needed.
  * Remove repeated middleware
  * [translations] Update automatically supported translations
  * [l10n] Add locale translations
  * Rebase with development
  * [signin] Made hard redirection after signin/out in order to update language correctly #630
  * [settings] Added translations. Closes #630
  * [i10n] Refactor #630
  * [settings-profile] Make locale configurable per user #630
  * [l10n] Fix middlewares order #630
  * [l10n] Added middleware to infer user locale with a three way method #630. Closes #633.
  * [l10n] Locale middleware #630
  * [translations] Render just one language int client #630
  * [build] Made translation files be served as asset instead of compile them in app.js #630
  * Revert "[build] Generate one app.js per translation file #630"
  * [build] Generate one app.js per translation file #630
  * Merge pull request #781 from Situphen/add/i18n-improves-french-translations
  * Merge pull request #780 from DemocracyOS/fix/validate-law-urls
  * Delete client token on error Closes #764
  * [add/i18N] Improves french translations
  * Add validation on any url field on law model
  * Merge pull request #778 from DemocracyOS/add/facebook-signin
  * [auth:facebook] - Fix config.jwtSecret
  * Merge pull request #770 from kant/patch-5
  * Merge pull request #768 from kant/patch-3
  * Merge pull request #779 from lucianosb/patch-1
  * Revert revert facebook signin
  * Merge branch 'master' into development
  * Release 0.15.0
  * Rename config key 'ssl' to 'https'
  * Remove privatePort config var
  * Fix typo
  * Reaname config key 'tos' and 'pp' to 'termsOfService' and 'privacyPolicy'
  * Reaname config key 'faq' to 'frequentlyAskedQuestions'
  * Add error when trying to send jwtSecret to the client.
  * Reaname config key 'secret' to 'jwtSecret'
  * Update pt.json
  * Merge pull request #775 from DemocracyOS/revert-760-add/facebook-login
  * Revert "[facebook-login] - Add facebook signin with FBClientId, FBClientSecret, ..."
  * Merge pull request #760 from DemocracyOS/add/facebook-login
  * Fix config calling
  * Add facebook signing configs to defaults.json
  * Merge with development
  * [signin] - Add redirect to facebook #745
  * [logout] - Add redirect to / instead of /signin after logout #745
  * Fix renaming facebook.callbackURL to facebook.callback
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * [gitignore] - Add .env to .gitignore
  * Merge pull request #765 from DemocracyOS/refactor-config
  * [config] - Get  from env variable or fallback to config #762
  * [config] - Update warning message #762
  * Merge branch 'refactor-config' of github.com:DemocracyOS/app into refactor-config
  * [config] - Remove development.json.sample #762
  * Merge github.com:DemocracyOS/app into refactor-config
  * Update DemocracyOs link & little typo
  * Minor fixes (proposal)
  * Some fixes (proposal)
  * Add placeholder config file when missing on development
  * Fix translations typo
  * Update tj/debug to visionmedia/debug component reference
  * Add base env.json on dos-install
  * Rename 'testing' environment to 'test'
  * Add client side new config
  * Update ocurrance of config('var') to config.var
  * Update ocurrances of config['var'] to config.var
  * Update config vars with spaces to camelCase
  * Add development.json.sample
  * Add new configuration parser #762
  * Merge pull request #756 from DemocracyOS/add/header-colors-parameterizable
  * Merge branch 'development' into add/header-colors-parameterizable
  * Rename 'bg' to 'background'. Add missing keys in env.js
  * Merge pull request #757 from DemocracyOS/remove/bootstrap.js
  * [facebook-login] - Add facebook signin with FBClientId, FBClientSecret, callbackURL and facebook signin config variables. Closes #745
  * [laws-filter] Abort reload function if there are no items #733
  * [laws-filter] Revert commit 9c0fb5564320cd57bc3fa41fb95f4e063d30a49e #733
  * [laws-filter] Fixed law fetching error on visibility hidden #733
  * [visibility] Removed console.log calls #733
  * [visibility] - Add visibility middleware to prevent anonymous users to access api data and pages when privacy is 'hidden' #733
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * [config] Added deploymentDomain environment variable and in client side #735
  * Update component/confirmation #758
  * Merge pull request #737 from DemocracyOS/fix/jwt-cookies
  * Resolve conflicts with development
  * Merge branch 'development' into fix/jwt-cookies
  * dont use jquery on lib/sidebar #758
  * Remove boostrap/dropdown from sidebar-filter
  * Remove bootstrap.js from layout
  * Hide user badge when settings clicked
  * Remove bootstrap.dropdown dependency #225
  * [header] Made some styles parameterizable. Closes #730.
  * [proposal-article] - Remove warning
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Merge branch 'add/whitelist-csv-emails' into development
  * [users-whitelist] - Add CSV emails. Closes #746
  * Fix circular dependency on lib/admin-sidebar
  * Load Placeholder.js polyfill only when is needed Close #751
  * Dont use html comments on layout
  * Merge branch 'update/prevent-not-whitelisted-user-signin' into development
  * [users-whitelist] - Add signin check against whitelist users. Closes #748
  * Merge pull request #743 from DemocracyOS/fix/broken-loading-lock
  * [browser-lock] Put a flag on browser-lock singleton to avoid unlocking an already unlocked spin. Closes #738
  * Merge pull request #720 from securingsincity/feature/comment-link-inline
  * Merge branch 'securingsincity-fix/typo-in-must-be-signed-in' into development
  * [proposal] Replaced &nbsp; by a whitespace #721
  * Merge branch 'fix/typo-in-must-be-signed-in' of https://github.com/securingsincity/app into securingsincity-fix/typo-in-must-be-signed-in
  * [signup] Fixed event binding to inexistent method #735
  * [signin] Removed all req.login calls. Closes #735
  * [signin] Store JWT in cookie in signin #735
  * Merge branch 'add/users-whitelist' into development
  * [translations] Fix typo #722
  * [signin] Made hard redirection after signin/out in order to update language correctly #630
  * [settings] Added translations. Closes #630
  * [i10n] Refactor #630
  * [translations] - Add translations for whitelists #722
  * [settings-profile] Make locale configurable per user #630
  * [users whitelist] - Add routes and admin sidebar item if 'users whitelist' config variable is enabled #722
  * [admin-whitelist-form] - Add deleting whitelist #722
  * [l10n] Fix middlewares order #630
  * [admin-whitelist] - Add whitelist update #722
  * [admin-whitelist] - Add whitelist form to create whitelists #722
  * [l10n] Added middleware to infer user locale with a three way method #630. Closes #633.
  * [l10n] Locale middleware #630
  * [translations] Render just one language int client #630
  * [admin-whitelist] - Update to use list.js on listing #722
  * [admin-whitelist] - Add removing DOM element after delete #722
  * [build] Made translation files be served as asset instead of compile them in app.js #630
  * Revert "[build] Generate one app.js per translation file #630"
  * [admin-whitelist] - Starting with the admin whitelist #722
  * [build] Generate one app.js per translation file #630
  * [whitelist] - Add translations for email whitelist error message #722
  * [whitelist] - Starting again with whitelist strategies
  * Merge branch 'development' into add/users-whitelist
  * [dos-db] - Fix loading models into db. Closes #716
  * [admin-users] - Add admin users list #722
  * [admin-sidebar] - Add users sidebar item #722
  * Merge branch 'fix/xss' into development
  * [models:law] - Add xss prevention when pre saving for summary. Closes #723
  * [whitelist] - Add whitelist check on signup #722
  * Fixes typos in must be signed in text
  * Changes comment-text anchor text to inline
  * Merge branch 'ben-pr-p-fix/bug676' into development
  * [citizen] Renamed method restricted to loggedoff #676
  * Merge remote-tracking branch 'upstream/development' into fix/bug676
  * Merge branch 'release-0.14.0' into development
  * Release 0.14.0
  * Merge branch 'launch' into development
  * bump quill
  * Make gravatar requests go through https
  * fix requirement of script for it to be secure
  * Bump debug version ^to 2.1.3 since it prevented built
  * [settings] - Add external settings page. Closes #712
  * Merge branch 'release-0.13.0' into development
  * Release 0.13.0
  * Merge branch 'fix/ip-address-domains' into development
  * [domain] - Add IP address as domains
  * [admin] - Fix admin responsiveness. Closes #691
  * Merge branch 'fix/admin-buttons' into development
  * [admin-laws-form] - Fix buttons position. Closes #708
  * add config custom files to .dockerignore
  * Merge branch 'release-0.12.15' into development
  * Release 0.12.15
  * [jwt] - Fix domains. #706
  * Merge branch 'release-0.12.14' into development
  * Release 0.12.14
  * [jwt] - Clear cookie after getting the domain. #706
  * Merge branch 'release-0.12.13' into development
  * Release 0.12.13
  * Merge branch 'fix/jwt-in-multiple-top-domains' into development
  * [jwt] - Fix exporting top level subdomain. Closes #706
  * Merge branch 'release-0.12.12' into development
  * Release 0.12.12
  * Merge branch 'add/create-tag-alert' into development
  * [admin-laws-form] - Add create tag link if no tags are found before creating any law. Closes #707
  * Merge branch 'release-0.12.11' into development
  * Release 0.12.11
  * [jwt] - Update jwt component to look like hub's
  * Merge branch 'release-0.12.10' into development
  * Release 0.12.10
  * Merge branch 'fix/logos' into development
  * [logo] - Add reponsive logo for mobile #699
  * Fix Crate my First topic wording
  * Merge pull request #705 from DemocracyOS/add/create-first-debate
  * Fix create first debate button
  * [logo] - Add 'external logo' config variable. Closes #699
  * Merge pull request #704 from DemocracyOS/add/create-first-debate
  * Add create my first debate button for staff members Closes #703
  * Merge pull request #692 from DemocracyOS/fix/admin-mobile-styles
  * Merge branch 'release-0.12.9' into development
  * Release 0.12.9
  * [config] update env.js to match code convetions
  * Make '_target' attr conditional to 'home link' setting on header org link
  * Revert "Fix organization link to open on same tab"
  * Fix logo link on header Closes #701
  * Fix organization link to open on same tab
  * Merge branch 'release-0.12.8' into development
  * Release 0.12.8
  * Merge pull request #702 from DemocracyOS/add/deploymentId-on-feeds
  * Add deploymentId on feeds
  * Merge branch 'release-0.12.7' into development
  * Release 0.12.7
  * [header] update header background color to match hub's
  * Merge branch 'release-0.12.6' into development
  * Release 0.12.6
  * [main] update dockerfile description
  * Merge branch 'fix/config-on-browser' into development
  * [config] - Expose client config on layout/index.jade for deployments where the config is part of the release and cannot be built
  * Fix header user-badge height #699
  * Merge branch 'release-0.12.5' into development
  * Release 0.12.5
  * fix usage of CORS_DOMAINS env variable
  * Merge branch 'release-0.12.4' into development
  * Release 0.12.4
  * Fix cors domains should be a string
  * Merge branch 'release-0.12.3' into development
  * Release 0.12.3
  * [config] update client config build logging
  * Merge branch 'release-0.12.2' into development
  * Release 0.12.2
  * [models/user] disable new topic notifications being true by default
  * [config] update default favicon file path
  * Merge branch 'release-0.12.1' into development
  * Release 0.12.1
  * Merge branch 'externalize-db-module' into development
  * [db] externalize component to democracyos-db repo
  * Add bug report template
  * Merge branch 'release-0.12.0' into development
  * Release 0.12.0
  * [refactor] make fallback port equal to the one in sample.json
  * [config] remove multicore option
  * Merge branch 'fix/mongoose-usage' into development
  * [db] fix usage of mongodb for replicasets
  * Remove all code
  * Remove deprecated models
  * Fix usage of connection string
  * [db] improve logging
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Pin mongoose to 3.8.24
  * [jwt] - Add checking if user foind after decoding token
  * [db] attempting to fix stuff
  * [tag] fix typo in function name
  * fixes and traces
  * Merge branch 'master' of github.com:DemocracyOS/app into development
  * Release 0.11.4
  * [jwt] - Fix calling next() no an error decoding jwt so it continues but without loading the user into the request
  * [auth pages] - Add redirect to external signin and signup on backend
  * Merge remote-tracking branch 'upstream/development' into fix/bug676
  * Merge branch 'release-0.11.3' into development
  * Release 0.11.3
  * [404] - Comment out 404 page to avoid problem on issue #690
  * Merge branch 'fix/external-signin' into development
  * [jwt] - Set domain when clearing the cookie
  * [logout] - Remove 'logout url' config parameter. Redirect to / when there is a signin url to refresh header and prevent a loop for redirecting to /logout
  * [jwt] - Back to cookies storage
  * [logout] - Add GET /logout. Add access_token on layout
  * [jwt] - Store token on localStorage instead of in a cookie
  * [signin] - Add current URL as returnUrl query parameter
  * Merge branch 'release-0.11.2' into development
  * Release 0.11.2
  * [config] - Rename authpages to separate 'signin url' and 'signup url'
  * [jwt] - Remove setting domain
  * [jwt] - Fix saving cookie to specific app domain if not in development environment
  * [config] - Remove on function from env.js, as it wasn't being used properly. Remove discardEmpty option when merging both local and env configs
  * Merge branch 'release-0.11.1' into development
  * Release 0.11.1
  * prevented logged in users from visiting signin or signup
  * Merge branch 'add/law-commented-notification' into development
  * [law-comment] - Send notification to notifier when a law is commented
  * Merge branch 'add/law-voted-notification' into development
  * [law-voted] - Add notifier notification
  * Fix new law button
  * Fix new tag button on admin
  * Merge branch 'fix/signin' into development
  * [jwt] - Store jwt in cookies to work out between hub and DemocracyOS
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * [boot/images] remove unnecessary images
  * [layout/images] remove unnecessary images
  * Merge branch 'release-0.11.0' into development
  * Release 0.11.0
  * [proposal-article] fix summary truncation issue
  * [layout] Remove unneeded images and updated logo and favicon
  * [proposal-article] - Add hiding 'Read more' link text when topic has got only one paragraph contained in a single <div> element #438
  * [translations] update translations for new admin layout
  * [admin-laws-form] hide irrelevant elements and re-sorted others
  * [admin-sidebar] fix handling of sidebar highlighting that would break the UI
  * Merge branch 'development' into update/admin
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * [db] Fix usage of mongodb connections to replica sets
  * Merge branch 'add/cors' into development
  * [cors] - Add checking for * CORS wildcard
  * Merge pull request #687 from DemocracyOS/upgrade-mongo-usage
  * Merge branch 'upgrade-mongo-usage' of github.com:DemocracyOS/app into upgrade-mongo-usage
  * [setup/user] update usage of mongodb by adding the db module
  * [docker] remove Dockerfile from .dockerignore
  * [setup/user] update usage of mongodb by adding the db module
  * Merge pull request #686 from DemocracyOS/add/cors
  * Merge pull request #657 from DemocracyOS/fix/generic-styles
  * Merge branch 'fix/generic-styles' of github.com:DemocracyOS/app into fix/generic-styles
  * merge with development
  * Merge pull request #680 from tarasdudar/feature/add-ukrainian-translations-and-prepare-for-other-languages
  * [cors] - Add CORS support. CORS_DOMAINS env variables holds a whitelist of domains
  * [admin] Fixed search bar items arrangement #675
  * [admin-sidebar] Restyled sidebar #675
  * Merge with add/quilljs #675
  * Merge with development #438
  * Merge branch 'add/quilljs' into update/admin
  * [proposal-article] Fixed bad legacy text rendering #438
  * [admin] Added non-english translation keys #675
  * [admin] Added english translation keys #675
  * [admin-laws] Fixed sort buttons styling #675
  * [admin-tags] Revamped tags list #675
  * [admin-sidebar] Made sidebar smaller #675
  * [admin-law-form] Arranged action buttons on top right #675
  * [admin-law-form] Changed form layout #675
  * [admin-laws] Revamped laws list #675
  * [admin-laws] Added Sort and New buttons to list #675
  * [admin-laws-form] Fixed new form crashing #675
  * [admin-laws] Added Search to laws list #675
  * added minor translation tweaks
  * [admin-laws-form] Revamped links section #675
  * Merge branch 'release-0.10.14' into development
  * Release 0.10.14
  * Merge pull request #674 from DemocracyOS/update/notifier-interface-on-law-published
  * [admin-laws-form] Made checkboxes toggle buttons #675
  * [proposal-article] Added summary truncation for laws without clauses #675
  * [admin-laws-form] Hide clauses Add button for new laws and laws that have not clauses #675
  * add missing translations Closes #671
  * [law-api] - Add instanceUrl and law.id to data sent to notifier #673
  * [debug] - Fix debug dep on lib/debug component #653
  * Merge pull request #664 from DemocracyOS/add/debug-config
  * Merge branch 'add/quilljs' into update/admin
  * use lib/debug everywhere
  * [debug] - Wrap visionmedia/debug inside lib/debug component #653
  * Update error message
  * [component] - Bump to 1.0.0
  * Merge pull request #662 from DemocracyOS/fix/no-comments-msg
  * show no comments msg when comment deleted Closes #662
  * [proposal-article] Fixed text break. Closes #438
  * [proposal-article] Fixed clauses paragraphs #438
  * only configure client side debugging Closes #653
  * add debugging configurations Closes #653
  * Merge pull request #663 from guiiruiz/patch-1
  * Fix some portuguese translations
  * [proposal-article] Fixed bad rendering on clauses with manually entered HTML #438
  * hide filter combo when needed, Closes #553
  * remove useless method
  * improve .btn default kerning
  * Merge pull request #656 from DemocracyOS/fix/bug-after-login
  * [citizen] - Refactor citizen.optional middleware #376
  * Merge pull request #660 from DemocracyOS/fix/build-process
  * [richtext] Bumped democracyos/quill to 0.9.11
  * Merge branch 'add/quilljs' of github.com:DemocracyOS/app into add/quilljs
  * [build] - Remove unnecesary setting DEBUG on Procfile #465
  * [build] - Add debug on Procfile and move running instructions to postinstall script on package.json file #465
  * [proposal-article] Fixed responsive wrapping in clauses #438
  * [proposal-article] Video embeds responsively #438
  * [richtext] Added video tooltip #438
  * [richtext] Made editor container 330px height #438
  * [richtext] Improved defaults handling and customization #438
  * [richtext] Added description #438
  * [richtext] Added Bullet button to toolbar #438
  * [proposal-article] Fixed side-commented empty lines #438
  * [richtext] Shrinked editor box height to 150px #438
  * [richtext] Change styles to be more like the other form controls #438
  * [proposal-article] Refactor #438
  * [admin-law-form] Fixed richtext error when rendering legacy law text #438
  * [admin-laws-form] Fixed textarea value replication on multiple clauses #438
  * [richtext] Fixed bug when rendering against empty textarea #438
  * [admin-law-form] Added richtext control to clause forms #438
  * [richtext] Turned off font face and size buttons in the toolbar #438
  * [proposal-article] Fixed content rendering with text saved using richtext control #438
  * [richtext] Added image tooltip #438
  * [admin-law-form] Added rich text control to Summary field #438
  * [richtext] Added richtext component #438
  * [proposal-article] Fixed responsive wrapping in clauses #438
  * [proposal-article] Video embeds responsively #438
  * [richtext] Added video tooltip #438
  * [richtext] Made editor container 330px height #438
  * [richtext] Improved defaults handling and customization #438
  * [richtext] Added description #438
  * [richtext] Added Bullet button to toolbar #438
  * [proposal-article] Fixed side-commented empty lines #438
  * [richtext] Shrinked editor box height to 150px #438
  * [richtext] Change styles to be more like the other form controls #438
  * [proposal-article] Refactor #438
  * [admin-law-form] Fixed richtext error when rendering legacy law text #438
  * [admin-laws-form] Fixed textarea value replication on multiple clauses #438
  * [richtext] Fixed bug when rendering against empty textarea #438
  * [admin-law-form] Added richtext control to clause forms #438
  * [richtext] Turned off font face and size buttons in the toolbar #438
  * [proposal-article] Fixed content rendering with text saved using richtext control #438
  * [richtext] Added image tooltip #438
  * [admin-law-form] Added rich text control to Summary field #438
  * [richtext] Added richtext component #438
  * [build] - Fix build to process.exit(1) on error during build #465
  * fix text-mute msg spacings
  * Merge pull request #658 from DemocracyOS/fix/unknown-closing-date-translation
  * Add unknown closing date translation Closes #655
  * add min-height to comments list
  * fix user-badge text line-height when the avatar didnt load
  * fix base .btn line-height
  * dont try to re-load user when already logged Closes #652 #376
  * refactor db-api user public interface
  * little style fixes
  * after login, use response data, dont fetch again user #376
  * Merge pull request #649 from DemocracyOS/fix/translations
  * [dos-translate] - Fix bin file permissions #643
  * Merge pull request #650 from DemocracyOS/fix/bug-after-login
  * fix error after login Closes #376
  * translate missing keys Close #476
  * fix translate method
  * improve dos-translate interface
  * delete extra keys on other languages
  * namespace all keys
  * add initial docker-related files
  * Merge branch 'development' of github.com:DemocracyOS/app into lib/translator
  * remove useless keys on en language #476
  * Revert 'remove useless keys from en language' commits.
  * Merge branch 'gdpelican-feature/edit-side-comment' into development
  * [side-comments] - Bump DemocracyOS/side-comments dependency to 0.0.14
  * delete useless keys on 'en'
  * remove unused locale keys on  language
  * dont translate values with {var} variables
  * fix bad merged file
  * merge with bin/dos-translate
  * sort language file functionality
  * list/remove extra keys functionality
  * sort files after editing them
  * change lib interface and add rename-key functionality
  * add delete-key functionality to translator lib
  * translation lib with fill missings functionality #643
  * basic translation lib #643
  * Merge branch 'feature/edit-side-comment' of https://github.com/gdpelican/app into gdpelican-feature/edit-side-comment
  * translation lib with fill missings functionality #643
  * Allow in-app editing of side comments
  * Merge branch 'release-0.10.13' into development
  * Release 0.10.13
  * Fix invalid char in some translations
  * Update italian translations
  * Update french translations
  * Update galician translations
  * Update finnish translations
  * Update spanish translations
  * Update english translations
  * Update german translations
  * Update catalan translations
  * Update ukrainian translations
  * Update swedish translations
  * Update russian translations
  * Update portuguese translations
  * Update english trasnaltions
  * Merge branch 'fix/translation-keys' of github.com:DemocracyOS/app into fix/translation-keys
  * Update Dutch translation
  * [translation] Updated header keys.
  * [translation] Removed unused keys (apparently intended to be for signup form).
  * Merge branch 'release-0.10.12' into development
  * Release 0.10.12
  * Merge branch 'Dandandan-patch-1' into development
  * Some updates to Dutch translation.
  * Merge branch 'release-0.10.11' into development
  * Release 0.10.11
  * Update translations
  * add translations #635
  * add link to admin panel on dropdown #635
  * basic translation lib #643
  * Merge branch 'release-0.10.10' into development
  * Release 0.10.10
  * [utils] - Add translitarate when normalizing. Closes #642
  * Merge pull request #639 from tarasdudar/feature/add-ukrainian-translations-and-prepare-for-other-languages
  * Minor tweaks for translations
  * Merge branch 'release-0.10.9' into development
  * Release 0.10.9
  * Merge branch 'fix/scrolling-jump' into development
  * [header] - Fix jump when scrolling headroom. Closes #637
  * [db-api:law] - Fix creating a new tag for a law with an unexistant one, and prevent saving a law with no tag defined #624
  * Merge branch 'fix/create-law' into development
  * [law] - Fix saving a law with no tag on it. Closes #624
  * Merge branch 'release-0.10.8' into development
  * Release 0.10.8
  * [timeago] - Fix interval to be 1s #631
  * Merge branch 'release-0.10.7' into development
  * Release 0.10.7
  * Merge branch 'update/timeago' into development
  * [timeago] - Remove bus emitting events to call timeago.update(). Update timeago update interval #631
  * [side-comments] - Bump DemocracyOS/side-comments version to 0.0.13 #631
  * Merge branch 'fix/admin-law-minutes' into development
  * [law-admin] Fixed hour formatting. Closes #625
  * Fix duplicate entry in changelog
  * Merge branch 'release-0.10.6' into development
  * Release 0.10.6
  * Fix error when clicking on show replies when not logged in. Fixes #632
  * Remove duplicate code introduced in #626
  * Merge branch 'fix/timestamp-style' of github.com:DemocracyOS/app into fix/timestamp-style
  * [comments] Fixed separation between commenter and timestamp. Closes #620
  * [comments-replies] Fixed timestamp showing where replies are displayed
  * [comments] Removed trailing ':' of comment and comment-reply timestamp #620
  * Merge branch 'fix/side-comments-limit' of github.com:DemocracyOS/app into fix/side-comments-limit
  * Fix usage of COMMENTS_PER_PAGE in env.js so 0 is always default
  * [law-api] Fixed paging limit in side-comments. Closes #623
  * Merge branch 'refactor/remote-store' of github.com:DemocracyOS/app into refactor/remote-store
  * [jwt] Refactor #621
  * [store] Refactor and code cleanup. Closes #621.
  * [law-api] Fixed paging limit in side-comments. Closes #623
  * Merge pull request #628 from DemocracyOS/fix/improve-comments-timestamp
  * [comments] Improve timestamp refresh #619
  * [comments] Improve timestamp refresh #619
  * [jwt] Refactor #621
  * [store] Refactor and code cleanup. Closes #621.
  * Merge branch 'mjlescano-fix/request-resend-validation' into development
  * add translations #616
  * correct error message translation namespace
  * don't allow valid users to request resend validation email
  * [comments] Fixed separation between commenter and timestamp. Closes #620
  * [comments-replies] Fixed timestamp showing where replies are displayed
  * [comments] Removed trailing ':' of comment and comment-reply timestamp #620
  * Merge #619
  * Merge branch 'solde9-fix-timestamp-show-immediately' into development
  * [comments] Renamed variables according to coding guidelines #619
  * [boot] - fix indentation convention
  * [comments-replies] - Fix When posting a new reply, timestamp doesn't show immediately
  * [comments-view] - Fix When posting a new comment, timestamp doesn't show immediately Closes #619
  * Make multicore server optional via config. Closes #611
  * Release 0.10.5
  * Update contributors
  * Bump version of DemocracyOS/side-comments. Fixes #615
  * several fixes for store lib
  * Remove setting timeago.interval since default is good enough (30 secs)
  * [boot] Set timeago update interval to 10 secs. Closes #615.
  * on store, load storage options only when needed [not working]
  * use store lib for jwt
  * several fixes
  * add wrapper for multiple storage options
  * basic look-alike wrappers for different storage options #582
  * Make multicore server optional via config. Closes #611
  * Merge pull request #612 from mjlescano/wrap_localstorage
  * Merge branch 'release-0.10.5' into development
  * Release 0.10.5
  * Update contributors
  * Bump version of DemocracyOS/side-comments. Fixes #615
  * several fixes for store lib
  * Remove setting timeago.interval since default is good enough (30 secs)
  * [boot] Set timeago update interval to 10 secs. Closes #615.
  * Merge pull request #614 from DemocracyOS/fix/using-app-get
  * on store, load storage options only when needed [not working]
  * [jwt] Changed express.get by config to get token secret. Closes #613
  * use store lib for jwt
  * several fixes
  * add wrapper for multiple storage options
  * basic look-alike wrappers for different storage options #582
  * Merge branch 'release-0.10.4' into development
  * Release 0.10.4
  * Add translations for #610
  * Fix usage of quotes to match coding standard
  * Merge branch 'fix/signup-error-existing-mail' into development
  * Fix handling of errors on formview. Fixes #610
  * Make 'new-topic' notifications true by default
  * Merge branch 'release-0.10.3' into development
  * Release 0.10.3
  * Merge branch 'fix-display-side-comments-button-only-on-mouse-over' of https://github.com/solde9/app into solde9-fix-display-side-comments-button-only-on-mouse-over
  * Merge branch 'solde9-fix-tag-icons-go-glitchy-when-tag-names-are-shorter' into development
  * [side-comments] - Fix Display side-comments button only on paragraph mouse-over for paragraphs with no comments #606
  * [proposal-article] - Fix tag icons go glitchy when tag names are shorter than 3 characters #607
  * Merge branch 'release-0.10.2' into development
  * Release 0.10.2
  * Add credits for Swedish translation contribution
  * Merge branch 'add/swedish-translation' into development
  * Add swedish translation
  * Merge branch 'fix/reset-non-validated-users' into development
  * Update some log messages
  * Remove unneeded switchOff function from forgot view
  * Merge branch 'add/login-overlay' into development
  * Remove unneeded div keywords and whitespaces.
  * [forgot-api] Changed error description string #602
  * [forgot] Redirect to Resend validation token page if nonvalidated email is submitted. Closes #602.
  * [comments] Refactor #593
  * Merge branch 'fix/forgot-label' into development
  * Merge branch 'fix/signup-flow' into development
  * [forgot] Explanation message now hides when form is submitted. Closes #594.
  * [proposal-options] You must login message placed over voting buttons. Closes #592.
  * [signup] Fixed signin after signup token validation. Closes #595.
  * [comments] Put signin required message over argument on up/downvoting. Also added links to signin/signup pages. Closes #593.
  * [settings] Fixed responsive styles. Closes #591
  * Move demo link above the image
  * Add Russian translation credits
  * Merge branch 'release-0.10.1' into development
  * Release 0.10.1
  * Remove whitespace
  * Merge branch 'feature/add-ukrainian-translations-and-prepare-for-other-languages' of https://github.com/tarasdudar/app into development
  * Merge branch 'release-0.10.0' into development
  * Release 0.10.0
  * Merge branch 'release-0.10.0' into development
  * Release 0.10.0
  * added russian language
  * Add configuration defaults mechanism
  * Bump 'merge-util' server-side dep to version 0.3.1 and fix handling of config merge in env.js
  * Fix usage of config setting for external signin/signup URLs
  * Update CONTRIBUTORS.md
  * Merge branch 'feature/better-dos-certs' into development
  * Fix way of building callback URLs to be compatible with SSL. Closes #587
  * Update SSL configuration names and usage stratagy #587
  * Tidy up index.js approach to spawning servers under HTTPS
  * [https] Renamed dos-certs to dos-ssl #587
  * [https] Added redirection to HTTPS for requests to HTTP #587
  * [https] Add ssl config variable to env #587
  * [https] Updated sample.json #587
  * [https] Improved dos-certs script #587
  * Rename env var DOS_SECRET to JWT_SECRET
  * Merge branch 'https' into development
  * Remove check for protocol being https in dos-certs
  * [https] Removed dos-certs execution from npm postinstall #98
  * [https] dos-certs: delete temporary files #98
  * [https] Updated .gitignore #98
  * [https] Improved dos-certs script #98
  * Merge branch 'https' of github.com:DemocracyOS/app into https
  * Fix unneeded module require
  * [https] SSL disabled by default
  * [https] Fixed race condition. Related to #98.
  * [https] Automatic certificate generation on build.
  * [https] Improved config structure. Related to #98.
  * [https] SSL disabled by default.
  * [https] Added some configuration keys
  * Merge branch 'fix/reply-focus' into development
  * Merge branch 'fix/reply-focus' of github.com:DemocracyOS/app into fix/reply-focus
  * [comments-view] Scroll and focus on textarea when clicking on New Argument button. Closes #555.
  * Merge branch 'refactor/comments-replies-edit' into development
  * Merge branch 'refactor/comments-replies-edit' of github.com:DemocracyOS/app into refactor/comments-replies-edit
  * [comments] Added restrict middleware to update and delete operations #282 #580
  * [comments-replies-edit] - Refactor to extend from View #282
  * [comments-replies-edit] - Refactor to extend from View #282
  * Merge branch 'feature/jwt' into development
  * [jwt] Fixed req.user null reference when route does not use restrict middleware #578
  * [comments] Added restrict middleware to update and delete operations #282 #580
  * Merge branch 'refactor/comments-replies-edit' of github.com:DemocracyOS/app into refactor/comments-replies-edit
  * [comments-replies-edit] - Refactor to extend from View #282
  * Merge branch 'feature/jwt' into development
  * Add moment as dep in package.json
  * Merge branch 'fix/580-domtokenlist-add-error' into development
  * Fixed misuse of dom.addClass method. Closes #580.
  * Rebase from development
  * [jwt] Signin via query string. Closes #578.
  * [jwt] Refactor #578
  * Fixed callback handling bug #578
  * Moved JWT secret to config #578
  * Implemented JSON Web Tokens (JWT) authentication middleware #578
  * Merge branch 'feature/disable-signin' into development
  * Merge branch 'feature/disable-signin' of github.com:DemocracyOS/app into feature/disable-signin
  * Added forgotten element in 'client' array
  * Added ability to disable signin/up by switch. #573.
  * Added config parameter to disable signin/signup. Closes #573.
  * [jwt] Signin via query string. Closes #578.
  * [jwt] Refactor #578
  * Fixed callback handling bug #578
  * Moved JWT secret to config #578
  * Implemented JSON Web Tokens (JWT) authentication middleware #578
  * Added forgotten element in 'client' array
  * Add contributors for Galician translation
  * Merge branch 'MareAtlantica-development' into development
  * Fix Galician language file
  * Merge branch 'development' of github.com:MareAtlantica/app into MareAtlantica-development
  * Update gl.json
  * Merge branch 'hotfix/side-comments' into development
  * Release 0.9.0a
  * Fix side-comments. Fixes #572
  * Merge branch 'development' of github.com:MareAtlantica/app into MareAtlantica-development
  * traducción galego
  * traducción galego
  * Added ability to disable signin/up by switch. #573.
  * Added config parameter to disable signin/signup. Closes #573.
  * [form-view] - Fix setting classes to error list items
  * Merge pull request #571 from tarasdudar/feature/add-ukrainian-translations-and-prepare-for-other-languages
  * adjusted uk.json based on the recent changes to en.json
  * Update CONTRIBUTORS.md with Ukrainian detail and updated active and past contributors.
  * Merge branch 'tarasdudar-feature/add-ukrainian-translations-and-prepare-for-other-languages' into development
  * Tidy things up for Ukrainian language
  * added uk.json support second revision
  * added uk.json support
  * Merge branch 'add/separate-database-for-users' into development
  * Store users in a MongoDB collection named users
  * Merge branch 'add/separate-database-for-users' of github.com:DemocracyOS/app into add/separate-database-for-users
  * Fix usage of user db-api
  * rename db-api/citizen.js to user.js
  * [models:user] - Add collection name to 'citizens' to support older versions #467
  * [env] - Add mongoUsersUrl to env config file #559
  * [models:user] - Use mongoUsersUrl or fallback to mongoUrl if the key doesn't exists in the config #559
  * [models:user] - Remove user-model module and export User model in lib/models #559
  * [db-api:comment] - Update comments' and replies' author to get populated by the User model #559
  * [user-model] - Separate Users into a different db #559
  * Deprecated MONGO_URI env var name in favor of MONGO_URL. Addendum to #525
  * Fix code to meet conventions
  * Fix usage of user db-api
  * rename db-api/citizen.js to user.js
  * Merge pull request #566 from DemocracyOS/notifier-wrapper
  * [notifications] - Fix send monkeypatch for Notifier #560
  * [models:user] - Add collection name to 'citizens' to support older versions #467
  * [participants-box] - Fix read more participants. Closes #565
  * Merge branch 'development' into add/separate-database-for-users
  * [env] - Add mongoUsersUrl to env config file #559
  * [models:user] - Use mongoUsersUrl or fallback to mongoUrl if the key doesn't exists in the config #559
  * [models:user] - Remove user-model module and export User model in lib/models #559
  * [db-api:comment] - Update comments' and replies' author to get populated by the User model #559
  * Remove experimental, unused code. #560
  * Add missing translations for #560
  * Merge branch 'notifier-wrapper' of github.com:DemocracyOS/app into notifier-wrapper
  * Basic wrapper for notifier-client #560
  * Fixed some code to meet the coding standards
  * Basic wrapper for notifier-client #560
  * Merge branch 'ditch-mongohq' into development
  * Switch to MONGO_URI as env var name for mongo db connection. Closes #525
  * Merge branch 'update/notifier-no-data-deps' into development
  * Update payload for 'law-published' notification. Closes #561
  * [user-model] - Separate Users into a different db #559
  * Fix layout of gitter badge
  * Merge pull request #556 from gitter-badger/gitter-badge
  * Added Gitter badge
  * [comments-view] Scroll and focus on textarea when clicking on New Argument button. Closes #555.
  * Merge pull request #509 from DemocracyOS/406-update-participants
  * Merge branch 'development' into 406-update-participants
  * [translation] Updated header keys.
  * [translation] Removed unused keys (apparently intended to be for signup form).
  * Merge branch 'update/resend-validation-interface' into development
  * Merge branch 'update/resend-validation-interface' of github.com:DemocracyOS/app into update/resend-validation-interface
  * Update error handling on response override to match refactored approach in FormView
  * rename key to appropiate convention #478
  * Missing translation keys  #478
  * Update re-send validation email view. Closes #478
  * Rename email invalid key #478
  * rename key to appropiate convention #478
  * Missing translation keys  #478
  * Update re-send validation email view. Closes #478
  * Update error handling on response override to match refactored approach in FormView
  * Merge branch 'fix/reply-focus' into development
  * [comments-replies] Made scroll and focus on textarea when reply. Closes #530.
  * [participants] Fixed repeated bubbles.
  * Merge branch 'refactor/sidebar' into development
  * Merge branch 'refactor/sidebar' of github.com:DemocracyOS/app into refactor/sidebar
  * [sidebar:filter] - Refactor to extend from View #282
  * [sidebar:list] - Refactor to extend from View #282
  * Merge branch 'refactor/comment-replies' into development
  * Merge branch 'refactor/comment-replies' of github.com:DemocracyOS/app into refactor/comment-replies
  * [comments-replies] - Refactor to extend from View #282
  * Merge branch 'refactor/comments-replies-edit' of github.com:DemocracyOS/app into refactor/comments-replies-edit
  * [comments-replies-edit] - Refactor to extend from View #282
  * Merge branch 'refactor/comments-filter' into development
  * Merge branch 'refactor/comments-filter' of github.com:DemocracyOS/app into refactor/comments-filter
  * [comments-filter] - Refactor to extend from View #282
  * Merge branch 'update/resend-validation-interface' of github.com:DemocracyOS/app into update/resend-validation-interface
  * Rename email invalid key #478
  * rename key to appropiate convention #478
  * Missing translation keys  #478
  * Update re-send validation email view. Closes #478
  * Merge branch '406-update-participants' of github.com:DemocracyOS/app into 406-update-participants
  * Manual merge
  * [participants] Updated translation keys to fit guidelines. Related to #406.
  * [participants] Fixed onvote event binding. Closes #406.
  * [participants] Updated translation keys to fit guidelines. Related to #406.
  * Merge branch '460-fix-voting-unfocused' into development
  * Merge branch '460-fix-voting-unfocused' of github.com:DemocracyOS/app into 460-fix-voting-unfocused
  * [laws-filter] Updates law filter model without fetch from server. Related to #460.
  * [sidebar] Changed the way voting badge is added to the sidebar. Closes #460.
  * Merge pull request #544 from DemocracyOS/refactor/comments-edit
  * Merge pull request #536 from DemocracyOS/refactor/reset-password
  * [reset-password] Merge with development. Related to #282.
  * Merge branch 'release-0.9.0' into development
  * Release 0.9.0
  * [sidebar:filter] - Refactor to extend from View #282
  * Merge pull request #511 from DemocracyOS/215-use-stylus
  * Merge remote-tracking branch 'origin/215-use-stylus' into 215-use-stylus
  * Fix faulty error handling in forgotpassword and signup with notifier. Closes #549
  * Forgotten component.json. Closes #215.
  * [signin/signup] CSS to Stylus. Related to #215.
  * [sidebar] CSS to Stylus. Related to #215.
  * [side-comments] CSS to Stylus. Related to #215.
  * [settings] CSS to Stylus. Related to #215.
  * [flaticons] CSS to Stylus. Related to #215.
  * [comments] CSS to Stylus in comments view. Related to #215.
  * [admin] CSS to Stylus in tags form view. Related to #215.
  * [admin] CSS to Stylus. Related to #215.
  * [admin] CSS to Stylus in admin-laws-form view. Related to #215.
  * [admin] CSS to Stylus. Related to #215.
  * Merge pull request #535 from DemocracyOS/refactor/forgot-view
  * [forgot] Updated some translation keys
  * [sidebar:list] - Refactor to extend from View #282
  * [forgot] Fixed translation keys according to guidelines.
  * Merge pull request #534 from DemocracyOS/refactor/admin-sidebar
  * Remove unneeded entries from component.json
  * Fix FormView error handling
  * Fix autosubmit and FormView error handling
  * Merge pull request #548 from DemocracyOS/add/allow-to-remove-comment-votes
  * Merge branch 'refactor/sidebar' into development
  * Merge branch 'development' into refactor/sidebar
  * Camel cas methods, update key. Closes #471
  * [header] Rebased and fixed wrong dom referente. Definitely closes #452.
  * [comment-vote] - Update code styling, variable and function names, etc. Remove unnecesary dependencies #471
  * [comment-vote] - Update code styling, variable and function names, etc. Remove unnecesary dependencies #471
  * Fix unneeded module require
  * [https] SSL disabled by default
  * Replace vote up/down on comment card by comment-vote. Closes #471
  * Expose unvote calls  #471
  * [comments-replies] - Refactor to extend from View #282
  * [comments-replies-edit] - Refactor to extend from View #282
  * Update styles.styl
  * Introduce comment vote view.  #471
  * [comments-filter] - Refactor to extend from View #282
  * [comments-edit] - Refactor CommentsEditView to extend from View #282
  * Release 0.9.0
  * [https] Fixed race condition. Related to #98.
  * [forgot] - Refactor ForgotPasswordView to extend from View #282
  * [forgot] - Refactor ForgotView to extend from View #282
  * Fix obtaining notifier-client config from env variables
  * Bump notifier-client dep to 0.2.0 and update config/sample.json accordingly
  * Fix usage of notifier-client
  * [admin-sidebar] - Refactor to extend from View #282
  * Merge branch '406-update-participants' of github.com:DemocracyOS/app into 406-update-participants
  * Manual merge
  * Revert "[sidebar:list] - Refactor list to extend from View #282"
  * [participants] Fixed onvote event binding. Closes #406.
  * [participants] Updated translation keys to fit guidelines. Related to #406.
  * [laws-filter] Updates law filter model without fetch from server. Related to #460.
  * [sidebar] Changed the way voting badge is added to the sidebar. Closes #460.
  * Rename email invalid key #478
  * rename key to appropiate convention #478
  * Missing translation keys  #478
  * Merge branch 'solde9-fix-edit-comment-form-buttons-styles' into development
  * [comments-replies-edit] - Fix edit comment form buttons styles #529
  * [comments-edit] - Fix edit comment form buttons styles #529
  * [comments-replies-edit] - Reply submit button not properly aligned #495
  * [comments-replies-edit] - Fix edit comment form buttons styles #529
  * [comments-edit] - Fix edit comment form buttons styles #529
  * Remove mandrill and mailer dependencies
  * [https] Automatic certificate generation on build.
  * [sidebar:list] - Refactor list to extend from View #282
  * [sidebar] - Refactor sidebar to extend from View #282
  * Merge branch 'refactor/comments' into development
  * [homepage] - Refactor homepage to use a middelware instead of an if-check clause. Update dependencies #282
  * Merge branch 'refactor/comments' of github.com:DemocracyOS/app into refactor/comments
  * Switch local dep markdown to DemocracyOS/marked for #527
  * Fix outdated i18n keys for #527
  * [comment-card] Fixed missing this reference. Related to #282.
  * Update dom dependecy. To avoid error of chain messages with .html() #282
  * [comments-view] - Add missing deps #282
  * [comments-view] - Remove deprecated comments-view component #282
  * [comments] - Add CommentsReplies on CommentCard #282
  * [comments] - Add refactor of comments pagination #282
  * [comments] - Revert changes for loading comments on demand #282
  * [comments-view] - Add starting loading more comments #282
  * [comments] - Add loading more comments #282
  * [comments-view] - Add removing comment #282
  * [comment-card] - Add removing comment #282
  * [comment-card] - Add successful edit handling #282
  * [comment-card] - Add edit button and cancel editing #282
  * [comment-card] - Add mark comment as spam #282
  * [comments-view] - Add button to submit new comment #282
  * [comments-view] - Add comment to mycomments after successful submit #282
  * [comment-card] - Add onlike and ondislike event handlers #282
  * [comments] - Add styling and separate between mycomments and all comments
  * [comment-card] - Starting with the comment-card
  * [comments] - Starting with the refactor
  * Fix outdated i18n keys for #527
  * Merge branch 'add/marked-component-dependency' into development
  * Merge branch 'add/marked-component-dependency' of github.com:DemocracyOS/app into add/marked-component-dependency
  * Replace * by master Closes #329
  * Remove unused markdown local module. Closes #329
  * change local markdown dependecy by remote dependency #329
  * Merge branch 'add/marked-component-dependency' of github.com:DemocracyOS/app into add/marked-component-dependency
  * Replace * by master Closes #329
  * Remove unused markdown local module. Closes #329
  * change local markdown dependecy by remote dependency #329
  * Merge branch 'add/marked-component-dependency' of github.com:DemocracyOS/app into add/marked-component-dependency
  * Replace * by master Closes #329
  * Remove unused markdown local module. Closes #329
  * change local markdown dependecy by remote dependency #329
  * Merge pull request #528 from DemocracyOS/475-deps
  * Merge branch '475-deps' of github.com:DemocracyOS/app into 475-deps
  * Bumped component-builder version to 1.2.0. Related to #475.
  * [signin] Fixed array length check throwing error with new version of dom. Related to #475.
  * [render] Changed merge-util argument type on calling. Closes #475.
  * Updated component and npm dependencies.
  * Merge pull request #524 from DemocracyOS/add/ie-message
  * [browser-update:styles] - Fix merge conflicts #523
  * [browser-update:styles] - Remove unnecesary colons and semicolons #523
  * [browser-update:styles] - Remove unnecesary colons and semicolons #523
  * [browser-update:template] - Add typekit to preserve consistent styling #523
  * [translations:es] - Update translation for 'Ops!' #523
  * fix invalid json. #168
  * [browser-update] - Add rendering whole page on server #168
  * portuguese keys. #168
  * netherlands keys #168
  * add italian keys #168
  * French translation #168
  * finish keys #168
  * Deusch translations. #168
  * Add catalan keys #168
  * Add spanish translations and keys #168
  * Remove unecesary selectors #168
  * Replace text by keys, add open link in new tabs. Closes #168
  * Improve styles and content for update browser page. Add links for donwload browsers. #168
  * Add component to the main build process. #168
  * Add middleware to handle unsupported browsers. Add module for unsupported browsers. #168
  * [browser-update:template] - Add typekit to preserve consistent styling #523
  * [translations:es] - Update translation for 'Ops!' #523
  * [package.json] - Fix typo. Missing comma #523
  * [https] Improved config structure. Related to #98.
  * [https] SSL disabled by default.
  * [comment-card] Fixed missing this reference. Related to #282.
  * Update dom dependecy. To avoid error of chain messages with .html() #282
  * [comments-view] - Add missing deps #282
  * Bumped component-builder version to 1.2.0. Related to #475.
  * [signin] Fixed array length check throwing error with new version of dom. Related to #475.
  * [render] Changed merge-util argument type on calling. Closes #475.
  * Merge branch 'development' into refactor/comments
  * [comments-view] - Remove deprecated comments-view component #282
  * Updated component and npm dependencies.
  * [comments] - Add CommentsReplies on CommentCard #282
  * Replace * by master Closes #329
  * Merge branch 'development' into add/ie-message
  * Remove unused markdown local module. Closes #329
  * change local markdown dependecy by remote dependency #329
  * [comments] - Add refactor of comments pagination #282
  * [comments] - Revert changes for loading comments on demand #282
  * [comments-view] - Add starting loading more comments #282
  * [comments] - Add loading more comments #282
  * [comments-view] - Add removing comment #282
  * [comment-card] - Add removing comment #282
  * [comment-card] - Add successful edit handling #282
  * [comment-card] - Add edit button and cancel editing #282
  * Merge remote-tracking branch 'origin/add/ie-message' into add/ie-message
  * fix invalid json. #168
  * [browser-update] - Add rendering whole page on server #168
  * Fix duplicate entry in citizen schema
  * Merge branch 'notifier-integration' into development
  * Fix last commit, which broke toggle styles
  * Merge branch 'notifier-integration' into development
  * Merge branch 'notifier-integration' of github.com:DemocracyOS/app into notifier-integration
  * [settings-notification] - Add setting for new-topic notification
  * [settings-notification] - Show only 'Notify on reply argument' notification. Toggle on citizen's preferences
  * [settings-api] - Add saving citizen notification settings
  * [settings-api] - Add dummy endpoint for /settings/notifications
  * Bump notifier-client dependency verison
  * Fix usage of notifier-client
  * Make signup email validations rely on notifier-client
  * [settings-notification] - Add setting for new-topic notification
  * [settings-api] - Add saving citizen notification settings
  * portuguese keys. #168
  * [models:citizen] - Add notifications attribute
  * [settings-api] - Add dummy endpoint for /settings/notifications
  * [translations] - Add missing translations for settings in every language
  * [settings-notification] - Update template and view to have more toggle buttons #28
  * Remove control logs. Actually closes #26
  * Make signup email validations rely on notifier-client
  * netherlands keys #168
  * [settings-notification] - Add setting for new-topic notification
  * [settings-api] - Add saving citizen notification settings
  * [toggle] - Fix toggle to work with Component(1) and Stylus
  * [models:citizen] - Add notifications attribute
  * [settings-api] - Add dummy endpoint for /settings/notifications
  * [settings-notification] - Update template and view to have more toggle buttons #28
  * [toggle:styles] - Update styles to be more DemocracyOS-ish #28
  * add italian keys #168
  * [toggle] - Add UI toggle component styled for DemocracyOS
  * Bump notifier-client dependency version
  * fix usage of notifier-client for argument replies #379
  * Add mail notifications when a law is published for users that are subscribed to it. Closes #473
  * [settings-notification] - Update citizen after saving
  * [settings-notification] - Add setting for new-topic notification
  * [settings-notification:template] - Fix label
  * [settings-notification] - Show only 'Notify on reply argument' notification. Toggle on citizen's preferences
  * [settings-api] - Add saving citizen notification settings
  * [toggle] - Fix toggle to work with Component(1) and Stylus
  * [citizen] - Add delivering notifications to client
  * [db-api:citizen] - Add exposing citizen's notifications
  * [models:citizen] - Add notifications attribute
  * [db-api:comment] - Add notifying when someone replies to an argument
  * [forgot-api] - Add notifier integration for forgot-password
  * Update sample config with notifier requirements
  * Remove trailing whitespace
  * Bump notifier-client dep version
  * Update  with notification settings
  * [settings-notifications] - Fix settings checkbox names and styles for labels
  * [settings-api] - Add dummy endpoint for /settings/notifications
  * [translations] - Add missing translations for settings in every language
  * [settings-notification] - Update template and view to have more toggle buttons #28
  * [toggle:styles] - Update styles to be more DemocracyOS-ish #28
  * [translations] - Add translations for Spanish and fix some English ones #28
  * [settings] - Enable settings-notifications view #28
  * [translations:en] - Add translations for settings notification view #28
  * [settings-notifications] - Add settings-notifications FormView #28
  * [toggle] - Add UI toggle component styled for DemocracyOS
  * Remove control logs. Actually closes #26
  * Bump  to 0.0.10
  * Bump  to 0.0.9
  * Make notifier usage dependent on configuration settings
  * Remove whitespaces
  * Bump notifier-client to 0.0.8
  * Bump notifier-client dependency verison
  * Fix usage of notifier-client
  * Make signup email validations rely on notifier-client
  * Bump notifier-client version
  * French translation #168
  * [https] Added some configuration keys
  * finish keys #168
  * Deusch translations. #168
  * Add catalan keys #168
  * Add spanish translations and keys #168
  * Remove unecesary selectors #168
  * Merge pull request #521 from DemocracyOS/452-header-autohide
  * [header] - Use component/dom instead of slifszyc/query  #452
  * Replace text by keys, add open link in new tabs. Closes #168
  * Improve styles and content for update browser page. Add links for donwload browsers. #168
  * Add component to the main build process. #168
  * [comment-card] - Add mark comment as spam #282
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Merge branch 'solde9-fix-username-and-timestamp-overlap' into development
  * [comments-view] Decreased separation between commenter's name and timestamp.
  * Merge pull request #520 from solde9/fix-upvote-comment-button-underlines-on-hover
  * [header] Made two instances of Headroom to support #content and #browser containers as scrollers. Related to #452.
  * [header] Hide header on scroll if app is rendered in mobile device. Closes #452.
  * [comments-view] - Add button to submit new comment #282
  * Add middleware to handle unsupported browsers. Add module for unsupported browsers. #168
  * [view] - Fix #516: Upvote comment button underlines on hover
  * [view] - Fix #515: User name and timestamp overlap on replies
  * [comments-view] - Add comment to mycomments after successful submit #282
  * [comment-card] - Add onlike and ondislike event handlers #282
  * [comments] - Add styling and separate between mycomments and all comments
  * Update re-send validation email view. Closes #478
  * [comment-card] - Starting with the comment-card
  * Merged with branch 460-fix-voting-unfocused. Closes #460 and #406.
  * Merge branch 'notifier-integration' of github.com:DemocracyOS/app into notifier-integration
  * [comments] - Starting with the refactor
  * Update citizen model. Made reply notifications true by default
  * [settings-notification] - Add setting for new-topic notification
  * [settings-notification] - Show only 'Notify on reply argument' notification. Toggle on citizen's preferences
  * [settings-api] - Add saving citizen notification settings
  * [models:citizen] - Add notifications attribute
  * [settings-api] - Add dummy endpoint for /settings/notifications
  * [toggle] - Add UI toggle component styled for DemocracyOS
  * Bump notifier-client dependency verison
  * Fix usage of notifier-client
  * Make signup email validations rely on notifier-client
  * fix usage of notifier-client for argument replies #379
  * Add mail notifications when a law is published for users that are subscribed to it. Closes #473
  * [settings-notification] - Update citizen after saving
  * [settings-notification] - Add setting for new-topic notification
  * [settings-notification:template] - Fix label
  * [settings-notification] - Show only 'Notify on reply argument' notification. Toggle on citizen's preferences
  * [settings-api] - Add saving citizen notification settings
  * [toggle] - Fix toggle to work with Component(1) and Stylus
  * [citizen] - Add delivering notifications to client
  * [db-api:citizen] - Add exposing citizen's notifications
  * [models:citizen] - Add notifications attribute
  * [db-api:comment] - Add notifying when someone replies to an argument
  * [forgot-api] - Add notifier integration for forgot-password
  * Update sample config with notifier requirements
  * Remove trailing whitespace
  * Bump notifier-client dep version
  * Update  with notification settings
  * [settings-notifications] - Fix settings checkbox names and styles for labels
  * [settings-api] - Add dummy endpoint for /settings/notifications
  * [translations] - Add missing translations for settings in every language
  * [settings-notification] - Update template and view to have more toggle buttons #28
  * [toggle:styles] - Update styles to be more DemocracyOS-ish #28
  * [translations] - Add translations for Spanish and fix some English ones #28
  * [settings] - Enable settings-notifications view #28
  * [translations:en] - Add translations for settings notification view #28
  * [settings-notifications] - Add settings-notifications FormView #28
  * [toggle] - Add UI toggle component styled for DemocracyOS
  * Remove control logs. Actually closes #26
  * Bump  to 0.0.10
  * Bump  to 0.0.9
  * Make notifier usage dependent on configuration settings
  * Remove whitespaces
  * Bump notifier-client to 0.0.8
  * Bump notifier-client dependency verison
  * Fix usage of notifier-client
  * Make signup email validations rely on notifier-client
  * Bump notifier-client version
  * Bump notifier-client dependency version
  * Merge branch '406-update-participants' of github.com:DemocracyOS/app into 406-update-participants
  * [participants] Fixed onvote event binding. Closes #406.
  * Forgotten component.json. Closes #215.
  * [signin/signup] CSS to Stylus. Related to #215.
  * [sidebar] CSS to Stylus. Related to #215.
  * [side-comments] CSS to Stylus. Related to #215.
  * [settings] CSS to Stylus. Related to #215.
  * [flaticons] CSS to Stylus. Related to #215.
  * [comments] CSS to Stylus in comments view. Related to #215.
  * [admin] CSS to Stylus in tags form view. Related to #215.
  * [admin] CSS to Stylus. Related to #215.
  * [admin] CSS to Stylus in admin-laws-form view. Related to #215.
  * Merge pull request #510 from DemocracyOS/revert-499-406-update-participants
  * Revert "406 update participants"
  * [participants] Updated translation keys to fit guidelines. Related to #406.
  * Merge pull request #499 from DemocracyOS/406-update-participants
  * Merge branch 'development' into 406-update-participants
  * [laws-filter] Updates law filter model without fetch from server. Related to #460.
  * [admin] CSS to Stylus. Related to #215.
  * [sidebar] Changed the way voting badge is added to the sidebar. Closes #460.
  * Merge pull request #489 from DemocracyOS/394-votes-count
  * Merge branch 'development' into 394-votes-count
  * Merge branch 'refactor-comments-view' into development
  * Merge branch 'release-0.8.26' into development
  * Release 0.8.26
  * Merge branch '472-duplicated-law-id' into development
  * Fix label logic for admin list law. Completes #504 and closes #472
  * Update CONTRIBUTING.md
  * Merge pull request #506 from solde9/fix-user-thumbnail-is-not-aligned
  * [view] - User thumbnail is not aligned with user name. Closes #503
  * Merge branch 'bigokro-fix/421-display-publish' into development
  * [admin-laws-form] - Remove jQuery scrolling to top after successful submit #458
  * On creating a law, routes to the page for the new law. Closes #421
  * [proposal-options] Updated i18n keys. Related to #394.
  * [comments-view] - Update to inherit from View
  * [models:law] Updated lawId index and improved save handler. Related to #472.
  * [law] Removed unique constraint. Closes #472.
  * Merge branch 'refactor-proposal-article' into development
  * Remove legacy unbinding code fixed updated by #501 for #497
  * Merge branch 'refactor-proposal-article' of github.com:DemocracyOS/app into refactor-proposal-article
  * [proposal-article] - Update ProposalArticle to inherit from View #282
  * Merge branch 'refactor-proposal-options' into development
  * Removed laws-phase-two directory.
  * Merge branch 'add/unbind-view' into development
  * Merge pull request #502 from DemocracyOS/490-restrict-vote-endpoint
  * [law-api] Add restrict middleware to vote endpoint. Closes #490.
  * [view] - Update checking for switchOn and switchOff being typeof function #500
  * [validation] Author name supports apostrophes ('), hyphens (-) and dots (.). Closes #493.
  * [view] - Update view to support unbindAll when element is removed, detaching DOM events and Emitter event handlers. Closes #500
  * [participants] Improved pluralization. Related to #406.
  * [sidebar] Update participants counter when vote. Closes #406.
  * [proposal-options] - Update proposal-options to inherit from View #282
  * [participants] Update participants counter and balloons after voting. Closes #406.
  * [proposal-article] - Update ProposalArticle to inherit from View #282
  * Merge branch 'solde9-fix-reply-submit-button' into development
  * Merge branch 'development' into refactor-proposal-article
  * Fix reply submit button not properly aligned. Closes #495.
  * Merge pull request #494 from DemocracyOS/refactor-participants-box
  * add .env to .gitignore
  * Update citizen model. Made reply notifications true by default
  * Merge pull request #486 from DemocracyOS/fix/h-scroll-for-mobile-settings
  * #484 Remove unnecesary colon and semicolon from .styl file
  * Merge branch 'notifier-integration' of github.com:DemocracyOS/app into notifier-integration
  * fix usage of notifier-client for argument replies #379
  * Add mail notifications when a law is published for users that are subscribed to it. Closes #473
  * [settings-notification] - Update citizen after saving
  * [settings-notification] - Add setting for new-topic notification
  * [settings-notification:template] - Fix label
  * [settings-notification] - Show only 'Notify on reply argument' notification. Toggle on citizen's preferences
  * [settings-api] - Add saving citizen notification settings
  * [toggle] - Fix toggle to work with Component(1) and Stylus
  * [citizen] - Add delivering notifications to client
  * [db-api:citizen] - Add exposing citizen's notifications
  * [models:citizen] - Add notifications attribute
  * [db-api:comment] - Add notifying when someone replies to an argument
  * [forgot-api] - Add notifier integration for forgot-password
  * Update sample config with notifier requirements
  * Remove trailing whitespace
  * Bump notifier-client dep version
  * Update  with notification settings
  * [settings-notifications] - Fix settings checkbox names and styles for labels
  * [settings-api] - Add dummy endpoint for /settings/notifications
  * [translations] - Add missing translations for settings in every language
  * [settings-notification] - Update template and view to have more toggle buttons #28
  * [toggle:styles] - Update styles to be more DemocracyOS-ish #28
  * [translations] - Add translations for Spanish and fix some English ones #28
  * [settings] - Enable settings-notifications view #28
  * [translations:en] - Add translations for settings notification view #28
  * [settings-notifications] - Add settings-notifications FormView #28
  * [toggle] - Add UI toggle component styled for DemocracyOS
  * Remove control logs. Actually closes #26
  * Bump  to 0.0.10
  * Bump  to 0.0.9
  * Make notifier usage dependent on configuration settings
  * Remove whitespaces
  * Bump notifier-client to 0.0.8
  * Bump notifier-client dependency verison
  * Fix usage of notifier-client
  * Make signup email validations rely on notifier-client
  * Bump notifier-client version
  * Bump notifier-client dependency version
  * fix reply rendering after submittin. Closes #491
  * fix usage of notifier-client for argument replies #379
  * [models:law] Fix callback handling on voting. Related to #394.
  * [models:law] Voting made async and UI blocks when user clicks on voting buttons. Closes #394.
  * [participants] - Separate participants-box into two separate components: one for holding the box and another one for each participant bubble #282
  * [models:law] Removed callback undefined check. Related to #394.
  * [models:law] Fixed misused async behavior when voting. Closes #394.
  * Merge pull request #483 from DemocracyOS/fix/user-badge-length
  * [header] - Remove unnecesary 'render' dependency
  * Merge pull request #488 from DemocracyOS/revert-487-394-votes-count
  * Revert "[model:law] Safer way to store votes. Related to #394."
  * [view] - Remove unnecesary 'assert' library. Rename onremove method to _onremove to not collision with the FormView onremove method.
  * Merge pull request #487 from DemocracyOS/394-votes-count
  * [model:law] Safer way to store votes. Related to #394.
  * #484 Fix rule
  * #484 Fix h-scrolls on mobile settings. - migrate settings from css to stylus (related to  #215) - Fix media queryes.
  * #224 - Restrict first name length on user drop down text
  * add folder to ignore files
  * Add mail notifications when a law is published for users that are subscribed to it. Closes #473
  * Fixed mongoose sessions error. Closes #439.
  * Add DEMOS deployment info
  * Merge branch 'release-0.8.25' into development
  * Release 0.8.25
  * [citizen] - Add preventing disabled accounts to singin #466
  * Update i18n section
  * Update CONTRIBUTING.md
  * Merge branch 'bigokro-feature/444-api-version-info' into development
  * Update CONTRIBUTING.md
  * New API method for getting the version info. Closes #444
  * Merge branch 'fix-tj-deps' into development
  * Release 0.8.24
  * Fix dep ref back to upstream
  * Revert "Update ref to a breaking dep"
  * Revert "Update all dep refs from 'visionmedia' to 'tj' #456"
  * Merge branch 'fix-tj-deps' into development
  * Release 0.8.23
  * Update ref to a breaking dep
  * Release 0.8.22
  * Update dep for DemocracyOS/side-comments
  * Merge branch 'master' into fix-tj-deps
  * Update refs to component/t
  * Merge branch 'fix-fixtures' into development
  * Release 0.8.21
  * Fix fixtures use and add acknowledgements to README.md
  * Pin deps for component/emitter
  * Update all dep refs from 'visionmedia' to 'tj' #456
  * Merge pull request #455 from bigokro/fix/proceed-in-english
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Merge branch 'release-0.8.20' into development
  * Release 0.8.20
  * [db-api:law] - Fix fetching own comments from mongodb
  * Minor spelling corrections in English (procced --> proceed)
  * Merge branch 'master' into notifier-integration
  * Merge branch 'fix-db-duplicate-laws' into development
  * Fixed function declarations on Issue #430
  * Fix tag duplication on law creation. Closes #430.
  * Merge branch 'fix-delete-argument-flow' into development
  * Fixed weird behavior when deleting arguments as admin
  * Merge branch 'fix-admin-source-url' into development
  * Fix regex for URL validation. Closes #451
  * Merge branch 'release-0.8.19' into development
  * Release 0.8.19
  * Fix layout and style of reply buttons. Closes #407
  * Merge branch 'release-0.8.18' into development
  * Release 0.8.18
  * Merge branch 'fix/comments'
  * Merge branch 'master' of github.com:DemocracyOS/app
  * [db-api:law] - Update query to get comments on a law either by an ObjectId or a String
  * [models:comment] - Update reference data type to Schema.Types.Mixed
  * Merge branch 'release-0.8.17' into development
  * Release 0.8.17
  * Merge branch 'side-comments' into development
  * fix admin able to delete side-comments of all users. Closes #448
  * [comments-view] - Fix 'No citizen has argumented on this law yet' message
  * Fix avatar usage in side-comments. Closes #447
  * Merge branch 'release-0.8.16' into development
  * Release 0.8.16
  * Merge branch 'complete-catalan' into development
  * [proposal-article] - Fix summary html rendering
  * Complete catalan translation
  * Add side-comments for summary paragraphs. Closes #33
  * Merge branch 'release-0.8.15' into development
  * Release 0.8.15
  * Add deleting comments as a staff member
  * Merge branch 'release-0.8.14' into development
  * Release 0.8.14
  * Bump sidebar-comments dep version to 0.0.9 and stylize them
  * Bump DemocracyOS/side-comments dep version to 0.0.6
  * Merge branch 'release-0.8.13' into development
  * Release 0.8.13
  * Bump DemocracyOS/side-comments dep version
  * Merge branch 'fix-side-comments-avatar' into development
  * Release 0.8.12
  * Fix side-comments avatar usage. Closes #447
  * Release 0.8.11
  * Partially undo last fix
  * Merge branch 'fix-filters-style' into development
  * Release 0.8.10
  * Fix filter box styles
  * Merge branch 'release-0.8.9' into development
  * Release 0.8.9
  * [side-comments] - Fix side-comments dep
  * Merge branch 'release-0.8.8' into development
  * Release 0.8.8
  * Pin mongoose version to 3.8.16
  * Merge branch 'release-0.8.7' into development
  * Release 0.8.7
  * Bump component-resolver dep version
  * Merge branch 'release-0.8.6' into development
  * Release 0.8.6
  * Update timeago dep
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Merge branch 'fix/closing-soon' into development
  * [laws-filter] - Fix sorting by 'Closing soon'. Close #442
  * Merge pull request #441 from StarterSquad/development
  * Merge branch 'fix/errorMessageInSpanish' into development
  * removes spanish error message (changed to english)
  * Merge branch 'fix-single-clause' into development
  * Release 0.8.5
  * Fix rendering clauses when only 1 clause is present. Closes #440
  * [settings-notification] - Update citizen after saving
  * [settings-notification] - Add setting for new-topic notification
  * Merge branch 'release-0.8.4' into development
  * Release 0.8.4
  * [db-api:citizen] - Fix null citizen on lookup
  * [settings-notification:template] - Fix label
  * Merge branch 'add/settings-notifications' into notifier-integration
  * [settings-notification] - Show only 'Notify on reply argument' notification. Toggle on citizen's preferences
  * [settings-api] - Add saving citizen notification settings
  * [toggle] - Fix toggle to work with Component(1) and Stylus
  * [citizen] - Add delivering notifications to client
  * [db-api:citizen] - Add exposing citizen's notifications
  * [models:citizen] - Add notifications attribute
  * Merge branch 'development' into add/settings-notifications
  * [db-api:comment] - Add notifying when someone replies to an argument
  * [side-comments] - Add DemocracyOS/side-comments pinned version to 0.0.4. Close #436
  * [forgot-api] - Add notifier integration for forgot-password
  * Update sample config with notifier requirements
  * Merge branch 'release-0.8.3' into development
  * Release 0.8.3
  * Merge branch 'add/accept-tos-pp-message' into development
  * [signup] - Add ToS and PP accept message. Close #405
  * [translations] - Add translations for 'By signing up you are accepting our' #405
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Merge branch 'fix/header-refresh' into development
  * [signin] - Load citizen after successful signin. Close #434
  * Remove trailing whitespace
  * Bump notifier-client dep version
  * Merge branch 'development' into notifier-integration
  * Merge branch 'master' into development
  * Release 0.8.2
  * Add portuguese locale
  * Merge branch 'remove/law-prefix' into development
  * [admin-laws-form:template] - Remove requied lawId field. Closes #424
  * Add missing key from en.json
  * [models:law] - Remove prefix from title and remove required lawId #424
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * [admin-laws-form] - Fix typo on 'read more' translation
  * Merge branch 'add/law-author' into development
  * [proposal-article] - Add author to the template. Close #428
  * [admin-laws-form] - Add 'author' and 'authorUrl' fields #428
  * [validators] - Add author validator #428
  * [translations] - Add translations for 'author' and 'validators.invalid.author' #428
  * [db-api:law] - Expose author and authorUrl attributes #428
  * [db-api:law] - Expose author and authorUrl attributes #428
  * [models:law] - Add 'author' and 'authorUrl' attributes #428
  * Merge branch 'master' into development
  * Release 0.8.1
  * Merge branch 'master' into fix-closest
  * Merge branch 'master' of github.com:DemocracyOS/app
  * fix Makefile building the app as well as post-install script
  * Update dependencies for closest non-deprecated version. Closes #431
  * Bump component/tip to 2.1.2
  * Bump deps component/events to 1.0.9 and cristiandouce/merge-util to 0.2.0
  * Merge branch 'release-0.8.0' into development
  * Release 0.8.0
  * Merge branch 'add/profile-picture-url' into development
  * Update templates to use profilePictureUrl when set. Closes #429
  * [settings-profile] - Add profilePictureUrl field #429
  * [comment] - Expose citizen's profilePictureUrl #429
  * [settings-api] - Add setting citizen.profilePictureUrl on update profile #429
  * [law-api] - Expose citizen's profilePictureUrl #429
  * [citizen] - Expose citizen's profilePictureUrl
  * [db-api] - Expose citizen's profilePictureUrl on db queries
  * [models:citizen] - Add profilePicture attribute #429
  * Bump component/dom@1.0.5 to 1.0.6
  * [translations] - Add translations for 'Or paste your image URL here...' #429
  * Merge branch 'add/more-information' into development
  * [proposal-article] - Add More information section on law template #432
  * [admin-laws-form] - Add link posterializing #432
  * [law-api] - Update exposing correct link attributes #432
  * [db-api:law] - Add setting links to law #432
  * [translations] - Add translations for 'More information' #432
  * [admin-laws-form] - Add links to a law
  * [translations] - Add translations for adding a link to a law
  * [admin-laws-form] - Add admin law form links to law
  * [law-api] - Expose links attribute
  * [translations:en] - Add translations for adding links to a law
  * [models:law] - Add links attribute
  * Merge branch 'add/clause-truncation-customizable' into development
  * [proposal-article:template] - Make the current approach the default when there's no such field defined. Don't show the first set of articles when truncating. Just hide the whole clause collection. Closes #426
  * Add customization option in /admin #426
  * [models:law] - Have an optional data field in law for overriding the clause-truncation text (this, of course, isn't localizable) #426
  * Fix translations
  * Remove 'Demo' from header logo tranlations
  * Merge branch 'remove/required-source' into development
  * [proposal-article] - Show on proposal-article.jade only if there IS a source link. Closes #425
  * [admin-laws-form:template] - Remove required source field #425
  * [models:law] - Remove required source attribute #425
  * Merge branch 'add/unvotable-laws' into development
  * [proposal-options] - Add hide participants when law is not votable
  * [proposal-article] - Add hide participants when law is not votable
  * [admin-laws-form] - Add votable field
  * [law-api] - Expose votable attribute to client
  * [models:law] - Add votable attribute
  * [translations] - Add translations for 'Votable'
  * Merge branch 'release-0.7.6c' into development
  * Release 0.7.6c
  * Merge branch 'fix/create-law'
  * [admin-laws-form] - Update template and view to use a regular input textbox for time. Fix calendar component.
  * [validators] - Add validator for time
  * [regexps] - Add regexp for time
  * [translations] - Add translations for 'Invalid time'
  * Merge branch 'release-0.7.6b' into development
  * Release 0.7.6b
  * [sidebar] - Fix path to check.png image
  * Merge branch 'release-0.7.6' into development
  * Release 0.7.6
  * Merge branch 'add/navigate-to-law-after-signin' into development
  * [signin:view] - Add redirect back to active topic after sign in. Closes #369
  * Merge branch 'component1' into development
  * Move dos-install, dos-config and dos-build to postinstall in package.json
  * Bump node version to 0.10.28
  * Bump npm version to 1.4.9
  * Migrate to Component(1)
  * Merge branch 'fix/login-tab-index' into development
  * Fix tab index in login fix #413
  * Merge pull request #415 from lalo/english-translation-fix
  * fixes to english translation
  * Merge branch 'master' into development
  * Release 0.7.5
  * Fix some spanish translations
  * Add menu items for faq, tos, pp and glossary, conditional to settings. Closes #412
  * Fix some spanish translations #412
  * Update  with notification settings
  * [settings-notifications] - Fix settings checkbox names and styles for labels
  * [settings-api] - Add dummy endpoint for /settings/notifications
  * [translations] - Add missing translations for settings in every language
  * [comments-view] - Add denying user to up/downvote comments if they are not signed in. Closes #403
  * [translations] - Add translations for 'You must be signed in to up/downvote arguments' #403
  * Merge branch 'release-0.7.4' into development
  * Release 0.7.4
  * [proposal-clauses] - Comment out SideComments for this release
  * Add missing german translation
  * Fix wrong german translation key
  * Add German and Dutch translators to
  * Fix var token in german translation
  * [settings-notification] - Update template and view to have more toggle buttons #28
  * [toggle:styles] - Update styles to be more DemocracyOS-ish #28
  * [translations] - Add translations for Spanish and fix some English ones #28
  * Merge Dutch translations from development
  * Merge branch 'xs4some-development' into development
  * Merge branch 'development' of github.com:xs4some/app into development
  * Localization should also be loaded here
  * Added Dutch translations
  * Merge branch 'fix/environment-variables' into development
  * Remove trailing whitespaces
  * [config] - Fix setting local and env config variables #399
  * [config] - Fix setting local and env config variables #399
  * Added Dutch translations
  * [config] - Fix setting local and env config variables #399
  * [config] - Fix setting local and env config variables #399
  * [config] - Fix setting local and env config variables #399
  * [config] - Fix setting local and env config variables #399
  * [config] - Fix setting local and env config variables #399
  * [config] - Fix setting local and env config variables #399
  * [config] - Fix setting local and env config variables #399
  * [config:env] - Fix converting the env variables to boolean #399
  * [config:env] - Fix typo on  #399
  * Fix config references to TOS, PP, GLOSSARY and FAQ #399
  * [config:env] - Fix optional environment variables
  * [config:env] - Fix optional environment variables
  * [settings] - Enable settings-notifications view #28
  * [translations:en] - Add translations for settings notification view #28
  * [settings-notifications] - Add settings-notifications FormView #28
  * [toggle] - Add UI toggle component styled for DemocracyOS
  * Add german translation
  * Merge branch 'fix/email-validation-flow' into development
  * [signup] - Add reference querystring parameter and use it to redirect on successful user validation. Closes #369
  * [proposal-options] - Add reference querystring parameter to /signup when user attempts to vote #369
  * [comments-view] - Add reference querystring parameter to /signup when user attempts to comment #369
  * [signup-api] - Add reference querystring parameter #369
  * [translations] - Add translations for 'You are being redirected in 5 seconds' #369
  * Merge branch 'fix/guest-label' into development
  * [signup] - Add citizen.required on the /signup/validated middleware for no anonymous user to be able to see this page and display their name instead of 'Guest'. Closes #393
  * [translations] - Remove translation for 'Guest' #393
  * Merge branch 'refactor-help-markdown' into development
  * [help-markdown] - Update middleware, view and template to inherit from View
  * Merge branch 'refactor-help-glossary' into development
  * [help:glossary] - Update middleware, view and template to inherit from View
  * Merge branch 'refactor-help-pp' into development
  * [help:pp] - Update middleware, view and template to inherit from View
  * Merge branch 'refactor-help-tos' into development
  * [help:tos] - Update middleware, view and template to inherit from View
  * Merge branch 'refactor-help-faq' into development
  * [help:faq] - Update middleware, view and template to inherit from View
  * Merge branch 'refactor-settings' into development
  * [settings] - Replace 'classes', 'empty', 'query' components only for 'dom'
  * Merge branch 'refactor-settings-password' into development
  * [settings-password] - Update middleware, view and template to inherit from FormView
  * [settings-profile:form] - Rename ProfileView to ProfileForm
  * Merge branch 'refactor-settings-profile' into development
  * [settings-profile] - Update middleware, view and template to inherit from FormView
  * [regexps] - Update 'names' regexp to be 100 characters max
  * [view] - Add 'appendTo' method to append el to a given element
  * [admin-laws-form:form] - Fix clearing closingAt and closingAtTime
  * [side-comments:styles] - Add 'text-align: left' in case the clause has 'text-align: center'
  * [proposal-article:template] - Fix typo
  * Merge branch 'refactor-admin-laws-form' into development
  * [admin-laws-form] - Update middleware, view and template to inherit from FormView
  * [admin-laws-form] - Update middleware, view and template to inherit from FormView
  * [admin-tags-form] - Fix un/binding to the new way of doing so
  * [form-view] - Add a call to 'postserialize
  * [autosubmit] - Fix submitting an object which contains an array inside
  * [validate] - Fix finding fields which names include brackets ( [] )
  * [view] - Update un/binding methods to DOM events
  * Remove control logs. Actually closes #26
  * Merge branch 'refactor-admin-tags-form' into development
  * [admin-tags-form] - Update middleware, view and template to inherit from FormView
  * [form-view:form] - Add 'response' as data sent to the callback
  * [form-view:form] - Remove all listeners when 'onremove' is called
  * [translations] - Add translations for 'Required checked field'
  * [validators] - Add validator for a checkbox to be checked and for a collection of checkboxes/radio-buttons to have anyone of them checked
  * Merge branch 'refactor-admin-tags-list' into development
  * [admin-tags:list] - Update middleware, view and template to inherit from View
  * Merge branch 'refactor-admin-laws-list' into development
  * [admin-laws] - Update middleware, view and template to inherit from View
  * [signup:view] - Rename  to
  * Merge branch 'refactor-signin' into development
  * [signin] - Update middleware, view and template to inherit from
  * [header:styles] - Fix  to the  div
  * Merge branch 'refactor-token-validation' into development
  * [signup] - Update middleware to match the refacftored logic
  * [signup:email-validation] - Separate email validation form submit and response handling from showing the success message as two different views
  * Bump  to 0.0.10
  * Merge branch 'refactor-resend-token' into development
  * [signup:middlewares] - Update to use refactores
  * [signup:form] - Remove (now) unnecesary component references
  * [resend-validation-email:form] - Update to use
  * [form-view] - Remove messages when submiting a form. Bump the  message to 1s instead of 800ms
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Merge branch 'refactor-signup' into development
  * [signup] - Remove form logic on middleware
  * [signup:form] - Update title on success
  * [form-view] - Add missing semi-colon on lines. Bump timeout to 500ms and 800ms to spin and display the 'Please wait' message. Fix  reference
  * [signup:form] - Refactor getting form values
  * [form-view] - Add  and  methods. Remove  method.
  * [signup:form] - Refactor showSuccess and remove deprecated methods
  * [form-view] - Add  and  component references. Add backend response handling. Fix showing messages.
  * [validate] - Fix - . : [ alias autoload bg bindkey break builtin bye cd chdir command compadd comparguments compcall compctl compdescribe compfiles compgroups compquote compset comptags comptry compvalues continue declare dirs disable disown echo echotc echoti emulate enable eval exec exit export false fc fg float functions getln getopts hash history integer jobs kill let limit local log logout noglob popd print printf pushd pushln pwd r read readonly rehash return sched set setopt shift source suspend test times trap true ttyctl type typeset ulimit umask unalias unfunction unhash unlimit unset unsetopt vared wait whence where which zcompile zformat zle zmodload zparseopts zregexparse zstyle method to re-enable form button correctly
  * [autosubmit] - Add  component
  * [is-mobile] - Add  component
  * Bump  to 0.0.9
  * Make notifier usage dependent on configuration settings
  * Remove whitespaces
  * Bump notifier-client to 0.0.8
  * [signup] - Add autosubmit on form template
  * [form-view] - Fix disabling the form upon submission
  * [autovalidate] - Fix serializing form submission
  * [validate] - Fix selecting the button for disabling
  * [translations] - Add  translations
  * [signup] - Comment out form submit handling
  * [signup-form] - Add validation on template
  * [autovalidate] - Fix  reference
  * [validate] - Fix  reference
  * [validators] - Add firstname and lastname validator. Fix not match validator
  * [regexps] - Fix passowrd regexp
  * [translations] - Add validators translations
  * [form-view] - Add basic form styles
  * Merge pull request #386 from elkingtowa/patch-1
  * Update README.md
  * Bump notifier-client dependency verison
  * Fix usage of notifier-client
  * [signup] - Update to use
  * [form-view] - Add first approach of a
  * [autovalidate] - Add autovalidate component
  * [validate] - Add validate component
  * [validators] - Add validators component
  * [regexps] - Add new password and numeric regexps
  * Make signup email validations rely on notifier-client
  * Bump notifier-client version
  * [boot] - Fix user-nav caret on top of citizen img
  * Merge branch 'fix/side-comments-mobile' into development
  * Update side comments to work on mobile
  * [snapper] - Fix sidebar not working
  * Merge branch 'fix/sidebar' into development
  * [snapper] - Change component/query for component/dom
  * Merge branch 'fix/sidebar-order' into development
  * [laws-filter:sorts] - Fix laws filter by  time
  * Bump notifier-client dependency version
  * [translations] - Fix spanish translations for side-comments.confirmation.title
  * [translations] - Fix typo
  * [translations] - Add missing translation for side-comment delete confirmation dialog
  * [sidebar-comments] - Fix overflow: auto
  * [models:law] - Add registering ClauseSchema as Clause in mongoose
  * [sidebar-comments] - Add scrolling side-comments for them not to overlap bottom general law comments
  * [proposal-clauses] - Add isMobile check before adding the SideComments, which are not currently supported on mobile browsers
  * [is-mobile] - Add component to check wether the client browser is mobile
  * [translations] - Add translations for side comments
  * [proposal-clauses] - Add setting locale for SideComments component
  * [side-comments] - Add css styles for createdAt time
  * Merge branch 'fix-clauses' into development
  * [db-api:law] - Remove populating clauses for law
  * Merge branch 'annotator' into development
  * [proposal-clauses] - Add displaying fullName for citizen side-comment. Remove voting options. Closes #390
  * [proposal-clauses] - Update sending translations to side-comments component #390
  * [translations:en:es] - Add translations for side-comments #390
  * [side-comments] - Update styles #390
  * [proposal-clauses] - Fix setting user for side-comments #390
  * [proposal-clause] - Remove the citizen.ready call as the /law/:id route already has citizen.optional middleware #390
  * [proposal-options] - Update template to move to the left along with the proposal-article when side-commenting a clause #390
  * [side-comments] - Update styles to make the commentable area bigger #390
  * [proposal-clauses] - Add delete comment handler #390
  * [side-comments] - Update font-family for marker #390
  * [proposal-clauses] - Move onClauseCommentPosted to proposal-clauses component #390
  * [law-api] - Add exposing comment 'context' and 'reference' #390
  * [db-api:comment] - Remove trailing spaces #390
  * [models:law] - Update postSave to not update the referenced element if none is found. Clauses does not have a separate collection as 'law' does #390
  * [proposal-clauses] - Add method to get comments from the backend #390
  * [side-comment] - Update css for Delete button and padding on the comment form #390
  * [clause-comments] - Clause comments now use the comments as the law comments, setting the context as 'clause' and the reference as the 'clauseId' #390
  * [proposal-clauses] - Add component for loading a proposal clauses' comments #390
  * [stateful-view] - Add StatefulView for Views that require a state management #390
  * [side-commnets] - Add creating new side-comments on each clause #390
  * [proposal-article] - Update the way clauses are rendered #390
  * [side-comments] - Add side-comments as a separate component for the css styling #390
  * [models:law] - Add ClauseCommentSchema #390
  * [proposal-article] - Add first client side code as a first approach #390
  * Merge branch 'refactor-frontend' into development
  * [header] - Update refactoring header to minimize its code and make it inherit from View
  * [user-badge] - Add separate component for user-badge header button and dropdown
  * [view] - Update constructor into separate prototype function calls for it to look cleaner
  * Update README.md
  * [header] - Start to refactor Header component
  * [view] - Add View component
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Merge branch 'refactor-frontend' into development
  * [view] - Remove component
  * Refactor components to use Stateful component to manage their states
  * [stateful] - Add stateful component
  * Remove unneeded whitespaces
  * Merge branch 'fix/no-laws-issue' into development
  * Release 0.7.3
  * [homepage] - Remove browser-page body class once page changes when no laws are found to displayed. Closes #385
  * Update french and italian language file
  * [view] - Add View component
  * Merge pull request #384 from vmariano/development
  * [boot] - Fix signup form ui bug in firefox.
  * Merge and close #383
  * Update #383 with some tidying up before PR is merged
  * [config] - Remove default to 'false' help pages
  * Add CONTRIBUTORS file.
  * Add MIT License text.
  * Contribute some clarifications, typo corrections and rewording.
  * Update deployment URL in README.md
  * Update active deployments
  * Update supported browsers in 'README.md'
  * Merge branch 'release-0.7.2' into development
  * Release 0.7.2
  * [boot] - Fix boot commenting 404 page until we have #376 solved
  * [sidebar:filter] - Fix counter label when there are +99 open/closed laws
  * [sidebar:filter] - Add 'for' attribute on 'hide-voted' label
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Merge branch 'stats' into development
  * [boot] - Add stats endpoint to app. Closes #377
  * [db-api:law] - Add functions to count total votes submited and search laws by a query object #377
  * [db-api:comment] - Add functions to count total rated comments and total replis submitted #377
  * [db-api:citizen] - Add function to find citizens whose email has been validated #377
  * [stats-api] - Add stats endpoint #377
  * Update default logo and favicon URL in
  * Merge branch 'fix/links-color' into development
  * [boot] - Fix anchor colors to be consistent all the way across the app. Closes #375
  * Merge branch 'initial-spinner' into development
  * [boot] - Add content-lock on boot #183
  * [content-lock] - Add component to lock #content until a page is rendered #183
  * [snapper] - Fix typo on destroy
  * Merge branch 'fix/email-validated-on-development' into development
  * [signup] - Set emailValidated to true when signup in 'development' environment. Closes #374
  * Merge branch 'participants-order' into development
  * [db-api:citizen] - Fix delivering participants in requested order. Closes #339
  * Merge branch 'clause-text-center' into development
  * [proposal-article] - Add .text-center when a clause has 'centered' attribute set to true. Closes #197
  * [admin-laws-form] - Add checkbox for 'centered' clause attribute #197
  * [law-api] - Expose 'centered' clause attribute #197
  * [models:law] - Add 'centered' attribute to ClauseSchema #197
  * [db-api:law] - Add setting clause.centered field as it may be undefined in the request data if the checkbox is not checked #197
  * [translations] - Add translation for 'Centered text' #197
  * Merge branch 'fix/read-more' into development
  * [comments-view] - Reduce space from 'read-more' and the comment itself. Separate the 'read-more' from the comment actions. Closes #361
  * Merge branch 'fix/proposal-article-links' into development
  * [proposal-article] - Fix text-decoration and color for anchors inside law article. Closes #354
  * Merge branch 'refactor-clauses' into development
  * [fixtures] - Update fixtures to use clauseName instead of clauseId #304
  * [proposal-article] - Replace 'clauseId' for 'clauseName' #304
  * [admin-laws-form] - Replace 'clauseId' for 'clausName' #304
  * [db-api:law] - Expose clauseName (instead of clauseId) field #304
  * [models:law] - Rename field 'clauseId' to 'clauseName' #304
  * [translations] - Replace translation of 'clauseId' for 'clauseName' #304
  * [proposal-article] - Update clauses rendering #304
  * [models:law] - Update clauseId to be non-required field #304
  * [layout] - Make the app un-zoomable on mobile. Closes #364
  * [comments-filter] - Fix caret dropdown button
  * [header] - Fix user profile caret toggle button
  * Merge branch 'fix/no-bill-selected' into development
  * [translations] - Add translations for 'no law to display' alert message. Closes #355
  * [homepage] - Add disclaimer when sidebar has no law to select #355
  * Merge branch 'fix/department-dropdown' into development
  * [boot] - Fix dropdown-button styles #335
  * [sidebar] - Fix dropdown elements display #335
  * Merge branch 'fix/header-race-condition' into development
  * [law] - Remove 'browser-page' class if it is not a validUrl #325
  * Merge branch 'fix/header-race-condition' into development
  * [law] - Add browsing law checking to render or not the law #325
  * [homepage] - Add browsing law checking to render or not the law #325
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Merge branch 'fix/social-cards' into development
  * Add strip package. Closes #334
  * [twitter-card] - Escape HTML characters #334
  * [facebook-card] - Escape HTML characters #334
  * Add Glossary Guidelines
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Merge branch 'fix/filter-count' into development
  * [laws-filter] - Fix open and closed count as they were counting drafts if you were signed in as admin. Closes #342
  * Add README.md stub
  * Merge branch 'fix/sorts-filter' into development
  * [sidebar] - Add check when status filter is set to 'closed' to hide the closing-soon sort filter and set as default the newest-first if the 'closing-soon' was selected. Closes #368
  * [help-glossary] - Fix scrolling to selected word
  * [help-glossary] - Fix scrolling to selected word
  * [config] - Add default value for help sections enabling
  * Merge branch 'glossary' into development
  * [help] - Add 'word' as a querystring parameter #371
  * [help-glossary] - Add margin to titles #371
  * [help] - Add /help/glossary/:word? route to the backend. Add scrolling to the selected word. #371
  * [help-glossary] - Add accepting a word by URL and focusing on that word when rendering the glossary. Also add a back button to return to the law reading #371
  * [translations] - Add translations for 'back' #371
  * [help] - Add glossary to help view #371
  * [help-glossary] - Add glossary component #371
  * [translations] - Add english and spanish translations for glossary #371
  * [config] - Add config parameters for glossary #371
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Merge branch 'notfound-page' into development
  * [law] - Add 404 when no law is found by its id #86
  * [admin] - Add missing routes for editing laws and tags #86
  * [db-api:law] - Add validating ObjectId before querying mongodb #86
  * [law] - Send a 404 when law is not found #86
  * [db-api:law] - Returning null when no law is found #86
  * Update  with link for Christian Martínez
  * [signup] - Separate signup from signup-api #86
  * [signin] - Separate signin from signin-api #86
  * [settings] - Fix rendering 404 page on client #86
  * [help] - Fix routes for help #86
  * [404] - Render 404 inside #content instead of body, so the citizen can still go back to the previous page #86
  * [forgot] - Separate forgot from forgot-api #86
  * [law] - Separate law from law-api #86
  * [settings] - Separate settings from settings-api #86
  * [boot] - Add forgot middlwares #86
  * [forgot] - Add forgot GET routes #86
  * [boot] - Add settings middleware #86
  * [settings] - Add settings routes #86
  * [boot] - Add admin middlewares #86
  * [admin] - Add admin routes #86
  * [boot] - Add 404 not fonud page on boot #86
  * [404] - Adapt layout for client side #86
  * [layout] - Adapt layout for client side #86
  * Update  with i18n contributors
  * [homepage] - Add homepage middleware #86
  * [layout] - Add DemocracyOS layout includes dir #86
  * [law] - Add law middleware #86
  * [404] - Add 404 middleware #86
  * [404] - Adapt layout to fit body instead of a div inside the body #86
  * [boot] - Add homepage, law and 404 middlewares to boot. Missing the rest of the GET method middlewares #86
  * [layout] - Add DemocracyOS layout and middleware #86
  * Update english language file
  * Update italian language file
  * Add italian language file
  * [boot] - Remove layout from boot and include it as a local dependency #86
  * [layout] - Separate layout into an isolated module #86
  * Merge branch 'fix/prevent-reloading-after-vote' into development
  * [proposal-options] - Prevent reloading the page each time the citizen votes. Closes #367
  * Merge branch 'update-closest' into development
  * Update 'discore/closest' to 'component/closest'
  * Merge branch 'release-0.7.1' into development
  * Release 0.7.1
  * [boot] - Remove 404 matching middleware. Refactor needed as the server should catch all routes and have a 404 fallback when one is not found
  * Merge branch 'release-0.7.0' into development
  * Release 0.7.0
  * Release 0.7.0
  * Release 0.7.0
  * Fix loading comments per page
  * Merge branch 'development' into release-0.7.0
  * Merge branch '404-page' into development
  * [boot] - Add 404 to boot #86
  * [404] - Add 404 component for 'not found' page #86
  * [translations] - Add translations for 404 'not found' page #86
  * Merge branch 'signup-help' into development
  * [signup:form-view] - Add ToS and PP links on signup form footer. Closes #148
  * [signup:form-view] - Add render component to domify the form el #148
  * Merge branch 'help' into development
  * [help] - Add responsiveness. Closes #357
  * [help] - Add config variables to enable faq, tos and pp pages #357
  * [config] - Add env variables to enable faq, tos and pp pages #357
  * [boot] - Add requiring help #357
  * [comments-view] - Update link to /help/markdown #357
  * [help] - Add help page with FAQ, ToS and PP. Also included Markdown page in here. #357
  * Update finnish translation
  * [boot] -  #357
  * [help] - Add basic help layout #357
  * Merge branch 'fix/admin-timepicker' into development
  * [admin-laws-form] - Fix laws timezone. Closes #340
  * Merge branch 'my-argument' into development
  * [comments-view] - Improve 'new argument' button, more github-like #323
  * [translations:es] - Improve translation for 'New argument' #323
  * [comments-view] - Add cancel new argument #323
  * [comments-view] - Add form on top of the comments for the citizen to comment on a law. Separate own comments from other citizens' #323
  * [law] - Add endpoint to request for own comments on a law #323
  * [db-api:law] - Add sorting own comments by createdAt date #323
  * [db-api:comment] - Add fallbacking to default config parameters when not sent #323
  * [translations] - Add translations for a disclaimer showing that there are no comments on a law and that your argument was removed, once you press the remove button #323
  * [translations] - Add translations for a disclaimer showing that there are no comments on a law and that your argument was removed, once you press the remove button #323
  * [comments-view:view] - Add sending 'exclude_user' as a query parameter to get all comments in a law. When citizen is logged, their comments should not be dislplayed along with all the other citizens' ones #323
  * [law] - Add setting 'exclude_user' from query parameter or fallbacking to null #323
  * [db-api:law] - Add 'exclude_user' parameter when set #323
  * [db-api:comment] - Add setting default value to exclude_user #323
  * Merge branch 'development' into my-argument
  * Merge branch 'fix-logout' into development
  * [comments-filter] - Fix logging out, not making a request to get comments as the comments-filter was producing a 'change' event and making an extra requst that could end up overwriting the passport session, producing a failed logout. Closes #345
  * [comments-view] - Add container for a user's own arguments #323
  * [comments-view] - Add starting with 'My argument' section #323
  * [translations] - Update 'comments.my.arguments' title #323
  * Merge branch 'voted-laws-bug' into release-0.7.0
  * [sidebar:list] - Add setting voting = true to a law when it is voted by the citizen. Closes #336
  * [laws-filter] - Add method to set voted = true to a law #336
  * Merge branch 'development' into voted-laws-bug
  * [comments-view] - Fix bug with comments spinner
  * Remove fix for responsive youtube, was broken
  * [comments-view] - Fix bug with comments spinner
  * [comments-view] - Fix bug with comments spinner
  * Release 0.7.0
  * Release 0.6.8
  * Merge branch 'disable-voting-own-comments' into development
  * [comments-view] - Add showing error when citizen tries to vote their own comment. Closes #343
  * [comment] - Add returning a 401 when a citizen tries to vote their own comment #343
  * [db-api:comment] - Add checking if comment author is the same as the logged in citizen #343
  * [translations] - Add translations for 'You\'re not allowed to vote your own comment' #343
  * [comments-view] - Add message when trying to downvote own comment on client side #343
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Update proposal-article to auto-scale iframes (i.e.: youtube embedded videos)
  * [comments-filter] - Fix binding citizen loading or unloading to CommentFilter
  * [comments-view] - Add new text for voting your own comment error
  * [comments-filter] - Fix setting 'score' as default comments sorting if no one is found in local storage
  * Fix typo on component.json
  * [comments-view] - Add error div
  * Merge branch 'fix/spam-limit' into development
  * Release 0.6.7
  * [comments-view:view] - Add updating dom flags element count with the new value after un/flagging a comment #348
  * [comments-view:template] - Fix showing comment.flags.length only when it is > 0. Otherwise show '' #348
  * [comments-view] - Add flags count next to flag #348
  * [comments-view] - Add using config 'spam limit' parameter. If not set, then a comment is marked as spam if spam > upvotes - downvotes #348
  * [env] - Add 'spam limit'config parameter #348
  * [sample] - Add 'spam limit'config parameter #348
  * Merge branch 'fix/transportation-tag' into development
  * Release 0.6.6
  * [tag-images] - Fix cannot set 'transport' image to a tag. Closes #347
  * Merge branch 'spin-comments' into development
  * [comments-view] - Add a spinner for loading comments. Closes #327
  * Merge branch 'hotfix/proposal-image-size' into 'development'
  * Release 0.6.5
  * [proposal-article] - Fix embedded image in proposal size to match the proposal's width
  * [comments-view] - Fix comments rendering before clearing existing comments to prevent a scrolling on the browser
  * [comments-view] - Add 'Reply to argument' anchor title. Closes #346
  * [translations] - Add translations for 'Reply to this argument', 'Reply' and 'Replies' #346
  * [translations] - Add translations for comments paging and sorting
  * [comments-replies] - Add 'edited' label next to createdAt time instead of showing editedAt time
  * [comments-view] - Add 'edited' label next to createdAt time instead of showing editedAt time
  * [db-api:comment] - Fix missing requiring 'lib/config' prevented comment from being inserted
  * Merge branch 'sort-comments' into 'development'
  * [comments-view] - Add getting sort from filters before sorting comments #322
  * [comments-filter] - Add localStorage to store comments filter user preference #322
  * Merge branch 'hotfix/remotes' into development
  * Release 0.6.4
  * Remove unneeded remotes from root component.json
  * [models:comment] - Add 'score' index #322
  * [comments-filter] - Add new styling for filters #322
  * [translations] - Add translations for 'Ordered by' #322
  * [comments-filter] - Add dropdown button styling #322
  * [translations] - Add translations for comments sort in english and spanish #322
  * [comments-view] - Add reloading comments when filter changes #322
  * [comments-filter] - Add changing filter sort button and emitting change event #322
  * [law] - Add '-createdAt' as valid sorting order for comments #322
  * [db-api:comment] - Fix getting comments per page limit from config when not requested #322
  * Merge branch 'release-0.6.3' into 'development'
  * Release 0.6.3
  * [component] - Fix build failure based on remotes. Change remotes order.
  * [comments-filter] - Fix bugs and rendering #322
  * [law] - Add support for sorting ASC or DESC #322
  * Merge branch 'release-0.6.2' into 'development'
  * Release 0.6.2
  * Merge branch 'master' into 'release-0.6.2'
  * [comments-view] - Fix comments score order
  * [config:sample] - If no comments per page limit is set then it will query for all comments
  * [config:env] - If no comments per page limit is set then it will query for all comments
  * [comments-view] - Add starting to use comments-filter #322
  * [comments-filter] - Add comments filter local component #322
  * Merge branch 'release-0.6.1' into development
  * Release 0.6.1
  * Fix several translation errors
  * [comments-view] - Add starting to sort comments on client side #322
  * [law] - Add add sorting comments query parameter #322
  * [db-api:comment] - Add sorting comments #322
  * [models:comment] - Add score field attribute #322
  * Merge branch 'release-0.6.0' into 'development'
  * [comments-view] - Add hiding 'Load more comments' button by default, and showing it depending on wether there are more to show or not #320
  * Merge branch 'development' into 'release-0.6.0'
  * Merge branch 'more-comments' into 'development'
  * [comments-view] - Remove tooltp on flag button
  * [comments-view] - Fix reply button size
  * [comments-view] - Fix always showing reply button
  * [comments-replies] - Fix reply border to be less transparent
  * Release 0.6.0
  * Merge 'comments-replies' into 'development'
  * [markdown-page] - Add explanation for links with text
  * [markdown] - Add prepending 'http://' to a link if it doesn't include it
  * [comments-view] - Move markdown disclaimer to the upper part of the comment block form
  * [translations] - Add translations for markdown links
  * [markdown] - Add GitHub styled links with [] and ()
  * [comments-view] - Add no hiding replies button when clicked #124
  * [comment-replies] - Fix moving arrow a little to the right #124
  * [comments-views] - Add hidding action buttons except on hovering #124
  * [comments-view] - Fix DOM element classes naming to differentiate from replies ones #124
  * [comments-replies] - Fix DOM element classes naming to differentiate from comment ones #124
  * [translations] - Add translations for comment and replies errors #124
  * [comment] - Fix cannot remove comment when it has replies #124
  * [comments-view] - Add hiding remove button to a comment when it has replies and decreasing the reply count when deleting a reply #124
  * [comments-replies] - Fix btn-edit and btn-remove order and emitting 'remove' event when reply gets removed #124
  * [models:comment] - Fix setting editedAt to a comment or reply correctly #124
  * [comments-view] - Add showing comment actions only on hovering (including: edit, remove, spam and reply) #124
  * [comment-replies] - Add more visibility to the thin border of the reply #124
  * [comments-view] - Add checking if comment has replies or if citizen is logged in to let them see the replies and make a new one or not #124
  * [comment-replies] - Add checking if citizen is logged in to determine if they can reply #124
  * [comments-view] - Add showing only edit and remove on hover, not flag #124
  * [comments-view] - Show edit and remove actions only when hovering #124
  * [comments-replies] - Fix moved markdown disclaimer next to 'Your argument' title #124
  * [comments-replies] - Fix hovering colors on reply-actions #124
  * [comments-view] - Fix not showing form errors #124
  * [comments-replies] - Add remove comment client side code #124
  * [comment] - Add remove reply endpoint #124
  * [comments-replies] - Add start of removing a reply #124
  * [comments-replies] - Add showing reply actions when hovering #124
  * Fix component version
  * [comments-replies] - Fix setting wether a reply is one's own or not #124
  * [comments-replies] - Add successful reply editing handler to hide again the editing box and refresh the reply text on DOM #124
  * [comments-replies-edit] - Add clearing textarea after editing #124
  * [comment] - Add edit reply api endpoint #124
  * [comment] - Add exposing 'editedAt' reply attribute #124
  * [db-api:comment] - Add edit reply method #124
  * [models:comment] - Add editedAt attribute to CommentReplySchema #124
  * Merge branch 'hotfix/component-version' into development
  * Release 0.4.12
  * Fix build failure based on remotes and outdated component version
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Add 'fi' locale (Finnish)
  * Update i18n to get locale from config. Closes #332
  * [comments-replies] - Add styling for replies to have a top up angle and a thin top border #124
  * [comments-replies] - Add logic to edit a reply using the comments-replies-edit component #124
  * [comments-replies-edit] - Add component to edit your replies #124
  * Merge pull request #331 from 3manuek/patch-2
  * Merge pull request #330 from 3manuek/patch-1
  * [comment-replies] - Add styling to the form #124
  * [comments-view] - Add styling to the replies and refresh ui when replying #124
  * [comments-replies] - Add styling to the replies and refresh ui when replying #124
  * [comment] - Fix comment replies population #124
  * [db-api:comment] - Fix comment replies population #124
  * [comment] - Fix exopsing reply author properties #124
  * [db-api:comment] - Fix populating replies #124
  * [comments-view] - Remove replies length when there are no replies #124
  * [law] - Add exposing replies when requesting for comment #124
  * [comments-replies] - Add form submit #124
  * [comment] - Add setting author as request user #124
  * [db-api:comment] - Add log for reply too #124
  * [comments-views] - Refactor component container and rendering #124
  * [comments-replies] - Refactor component container and rendering #124
  * [comments-replies] - Refactor component container and rendering #124
  * [comments-view] - Add comments-replies container #124
  * [comments-replies] - Add emptying container before rendering replies template #124
  * [db-api:comment] - Add author populating when requesting for comment replies #124
  * [comments-view] - Add rendering comment replies from the comments view  #124
  * [comments-replies] - Add rendering comment replies #124
  * [comment] - Remove expose replies keys #124
  * [db-api:comment] - Fix 'findOne' instead of 'find' to get comment replies #124
  * [comments-view] - Remove comments replies from this component #124
  * [comments-replies] - Add separated component for replies #124
  * Update en.json
  * Added more translations
  * [comments-view] - Add showing replies count and starting with the client side #124
  * [comment] - Add replies endpoint to get replies for a comment #124
  * [db-api:comment] - Add replies api method to get replies for a comment #124
  * [law] - Add replies length when deliverign a law #124
  * [models:comment] - Add validtors for CommentReply Schema #124
  * [translations] - Add translations for replies #124
  * Merge branch 'add/trunkata' into development
  * [comments-view] - Add comments truncation including markdown. Closes #328
  * [translations] - Add capitalized 'read more' #328
  * Merge branch 'comment-styling' into development
  * [comments-view] - Fix styling to display Send button on the right and widen the comment textarea
  * Merge branch 'add/flavored-markdown-link' into development
  * [markdown-page] - Remove clearing sidebar selected law for the citizen to know which law he/she was on #319
  * [comments-view] - Add link to /markdown on comment textarea #319
  * [markdown-page] - Add deselecting all elements from sidebar when rendering markdown page #319
  * [sidebar] - Update 'select' method to remove active from all sidebar elements regardless of finding the element to be selected  #319
  * [translations] - Add translations for markdown link #319
  * [translations:ca] - Fix typos #319
  * [boot] - Add markdown page component to boot #319
  * [markdown-page] - Add Mardown Page component #319
  * [translations] - Add translations for DemocracyOS Markdown page #319
  * Merge branch 'fix/voted-check-on-login' into development
  * Release 0.4.11
  * Fix 'voted' check after sign-in. Fixes #326
  * Merge branch 'add/markedown-comments' into development
  * [comments-view] - Add rendering comment with markdown after editing it. Closes #318
  * [comments-view] - Add using DemocracyOS markdown when rendering comments #318
  * [models:comment] - Update reduceLB to accept multiple linebreaks but reducing then to a max of 2 linebreaks #318
  * [markdown] - Remove lists rendering. Citizen can write listings using numbers and linebreaks #318
  * [markdown] - Add markdown local component #318
  * Merge branch 'fix/edit-comment' into development
  * [comments-view] - Remove tooltip from btn-edit and bt-remove #317
  * [comments-view] - Hide comment actions when prompting to delete a comment #317
  * [comments-view] - Remove debugging line. Update btn-edit and btn-remove to use FontAwesome icons instead of Bootstrap ones #317
  * [comments-view] - Add again hover styles for btn-edit and btn-remove. Debugging onedit event #317
  * [comments-view] - Remove hover styles on btn-edit and btn-remove #317
  * [comments-view] - Fix remove comment display on iPhone #317
  * Merge branch 'edit-comment' into development
  * [comments-view] - Update 'Yea'for 'Yes' when prompting to remove a comment #317
  * [translations] - Add 'Yes' translations #317
  * [comments-view] - Add deleting a comment while editing it. Closes #317
  * [comments-view] - Fix editing back a comment that has just been edited #317
  * [comments-edit] - Fix showing and hiding elements to properly edit a comment #317
  * [comments-edit] - Fix preserving edited comment text #317
  * [comments-view] - Update comment editedAt after updating #317
  * [law] - Expose editedAt attribute #317
  * [db-api:comment] - Remove setting the editedAt attribute here #317
  * [models:comment] - Add pre-save middleware to set editedAt attribute when updating #317
  * [translations] - Add translations for 'Edit' #317
  * [comments-view] - Add handler for a successful comment edition #317
  * [translations] - Add translations for editing comments #317
  * [comments-view] - Update CommentsEditView construction #317
  * [comments-edit] - Add edit comment #317
  * [comment] - Add edit comment route handle #317
  * [db-api:comment] - Add edit comment method #317
  * [comments-view] - Add comments edit view form on each own comment #317
  * [comments-edit] - Add own comment edit view form #317
  * Add live demo link to `README.md`
  * [comments-view] - Add deleting own comments. Closes #316
  * [comment] - Add route to remove a comment checking if it the user's own one #316
  * [db-api:comment] - Add method to remove a comment #316
  * [translations] - Add translations for removing own comments #316
  * Merge branch 'remove-self-spam' into development
  * [comments-view:comment-item] - Remove 'mark as spam' flag for own comments. Closes #315
  * [package.json] - Use ~ instead of ^. Closes #312
  * [admin-tags-form] - Fix refreshing the laws from the server when submitting form. Closes #307
  * [boot:styl] - Fix 1px gap between current department and dropdown toggle button on Safari explorer. Closes #285
  * Merge branch 'release-0.4.10' into development
  * Release 0.4.10
  * Merge branch 'update-sidebar-after-participating' into development
  * [sidebar] - Add refreshing the sidebar when a law gets voted. Closes #308
  * [proposal-options] - Add emitting to bus when a law is voted
  * [sidebar] - Add separate template for check image when voted #308
  * [signup] - Fix not showing form errors on FF. Closes #310
  * [comments-view] - Fix not showing form errors on FF #310
  * Merge branch 'development' into add/csrf-protection
  * Merge branch 'release-v0.4.9' into development
  * Release v0.4.9 - Public demo
  * [request] - Add setting the CSRF request header on 'end' function instead of on 'send' function #305
  * Remove requirement of feedback. Closes #303
  * Merge branch 'demo' into development
  * [request] - Add the 'X-CSRF-Token' request header on each request made to the server. Closes #305
  * [boot] - Add the 'csrfToken' global variable as a DOM global variable #305
  * [setup] - Add express csrf middleware and register a global variable for all templates rendered on the server called 'csrfToken'  #305
  * Update translations
  * Remove 'uservoice' from a block comment
  * Fix typo in
  * Update  with current deployments. Remove references to . Update
  * Update article template and config so alert is optional. Update some translations keys and values
  * Merge branch 'add/feed-rss' into development
  * Release 0.4.8
  * [rss] - Remove rss feed image icon #306
  * [rss] - Add rss feed image icon #306
  * [rss] - Remove 'Read more' link from law summary #306
  * [rss] - Add summary and a 'Read more' link on the feed xml #306
  * [db-api:law] - Add rss feed query #306
  * [rss] - Add xml response format. Closes #306
  * [rss] - Add checking if rss is enabled before rendering the xml #306
  * [config] - Add env variable for RSS feed enabling/disabling #306
  * [config] - Add env variable for RSS feed enabling/disabling #306
  * [boot] - Add RSS feed route #306
  * [laws-filter] - Add a server side component to expose laws sorting methods #306
  * [rss] - Add rss module for getting the latest laws and rendering them in an xml file #306
  * Update default fixtures for demo
  * Change locale to 'en'
  * Update header background color
  * [admin-tags] - Fix coding styles #299
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * [admin-tags] - Add list alphabetically sorting. Closes #299
  * Merge pull request #302 from Magui1984/development
  * Corrected some terms
  * Update fr.json
  * Update fr.json
  * Update fr.json
  * Update fr.json
  * Merge pull request #2 from gvilarino/patch-1
  * Fix missing colon
  * Update fr.json
  * Merge pull request #1 from gvilarino/patch-1
  * Fix missing colon
  * Update fr.json
  * Create fr.json
  * Merge fix/admin-laws-form from master
  * Release 0.4.7
  * [admin-laws-form] - Add datepicker and timepicker to admin laws form
  * [translations] - Add translations for 'closingAt'
  * Merge branch 'admin/closingAt' into development
  * [admin-laws-form] - Add timepicker for closingAt law attribute. Closes #300
  * [admin-laws-form] - Add styles to override bootstrap default css that was making datepicker popover invisible #300
  * [admin-laws-form] - Add datepicker control and clear button
  * [admin-laws-form] - Add field for closingAt date #300
  * [admin-laws-form] - Add component/datepicker dependency
  * [translations] - Add translations for  #300
  * Merge branch 'fix/comments-paragraphs' into development
  * Release 0.4.6
  * [comments-view] - Bump slifszyc/paragraphs to 0.2.0 version
  * [comments-view] - Bump slifszyc/paragraphs to 0.2.0 version
  * Merge branch 'fix/escape-comments' into development
  * Release 0.4.5
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Update application configuration by adding `dos-config` command. #234
  * [comments-view] - Disable unescaped comments since it allows hacking of view
  * Merge pull request #297 from rodowi/storage-quota-fix
  * Overcomes local storage quota
  * [law] - Fix update for #293
  * [laws-filter] - Improve code and document with comment blocks
  * [sidebar:list] - Fix suscribe ListView to LawsFilter items `reload` event instead of `change`
  * [citizen] - Update citizen middlewares
  * [homepage] - Code style
  * [laws] - Remove refetch on citizen loaded. Fixes #293
  * [sidebar] - Use `query` instead of native querySelector
  * Merge branch 'fix/firefox-laws-filter' into development
  * Release 0.4.4
  * [laws-filter] - Fix firefox bug on function scopes
  * [boot] - Remove script for removing hash to a different file
  * [styl] - Fix overflowed selected filter in Firefox. Closes #270
  * [sidebar] - Fix law min-height for voted badge. Closes #294
  * Merge branch 'add/styl-plugins' into development
  * Release 0.4.3
  * Remove homepage centrilized styles to each component and boot
  * [homepage] - Fix missing var spacing
  * [homepage] - Deprecate main.css
  * Update main.styl at homepage to match styl insted of stylus and add styl compile builder
  * Release 0.4.2
  * Update styles for admin and settings sections
  * [admin] - Update styles for admin sections and sidebar
  * [settings] - Match styles with admin section
  * [admin] - Update styles
  * [admin] - Update form width styles
  * [admin] - Update admin styles
  * Add  to several s in . Closes #289
  * Add missing keys to  locale translation file
  * Merge pull request #292 from 3manuek/master
  * Release 0.4.1
  * Fix feedback initialization with new header. Fixes #290
  * Fixed ca.json
  * Merge branch 'fixes-0.4' of github.com:DemocracyOS/app into fixes-0.4
  * [citizen] - Update citizen middlewares for client. Improve login/logout
  * [laws-filter] - Fix unexpected bug on filtering voted by component/to-function version diff
  * Fix snapper and refactor feedback section (WIP)
  * Release 0.4.0
  * Fix to re-fetch laws after login
  * Update ca.json
  * Merge branch 'development' into release-0.4.0
  * Merge branch 'header-upgrade' into development
  * Fix  sort in  to use  field instead of . Closes #287
  * [tags] - Change state to loading while fetching tags
  * [admin-laws-form] - Refetch laws after save/delete law
  * [laws] - Change state to loading while fetching laws
  * [admin] - Re-fetch laws after save
  * [citizen] - Updated staff client middleware. Closes #286
  * [translations] - Update I18n for `admin-laws-form` translation keys. Closes #279
  * [admin-laws-form] - Add translations keys for publish/unpublish/delete texts. #279
  * [admin-laws-form] - Update delete button styles
  * [admin-laws-form] - Add public/private status update and delete law with confirmation. Closes #242 #280
  * [law] - Add `publish`, `unpublish` and `delete` API endpoints. #242
  * [db-api:law] - Update queries to only display undeleted laws
  * Bump bootstrap to 3.1.1
  * Fix site reload on login. Closes #283
  * [law] - Update endpoint to serve only public laws unless user is staff
  * [db-api:law] - Add query option at law db-api method
  * [models:law] - Add publishedAt and deletedAt fields. Remove unused deleted field
  * Update ca.json
  * [tag-images] - Update images to global international naming
  * Merge pull request #1 from narcisbcn/patch-2
  * Update ca.json
  * Update ca.json
  * Update ca.json
  * Added Catalonian translation file
  * [translations] - Update translations for admin-tags-form. #281
  * [sidebar] - Update tag image url source from `tag-images` collection
  * [proposal-article] - Update tag image url source from `tag-images` collection
  * [render] - Add `tagImages` as a global var for templates
  * [boot] - Remove moved tag images from component.json
  * [admin-tags-form] - Update form to allow image selection for tags. Closes #278
  * [admin] - Update force tags section as part of `List` at sidebar
  * [db-api] - Add image key of tag for laws all population
  * [tag] - Provide image key from tag API endpoint #278
  * [models:tag] - Add image key to model tag #278
  * [tag-images] - Make collection of tag images a module
  * Fix sidebar not being sensitive to citizen logout. Closes #274
  * [translations] - Add translations for admin sections. Closes #281 #279 #277 #276 #275
  * [admin-tags-form] - Add translation keys for #281
  * [admin-tags] - Add translation keys for #277
  * Merge branch 'fix/component-build-error' into development
  * Release 0.3.4
  * Fix component build process - exit on error
  * [bin:dos] - Fix use  version
  * Merge branch 'fix/component-install-error' into development
  * Release 0.3.3
  * Fix handling of component build errors
  * [admin] - Fix `admin-tags-form` split from `admin-tags`
  * [admin-tags] - Fix form split
  * [admin-tags-form] - Split from `admin-tags`
  * [admin-laws-form] - Add translation keys for #279
  * [admin-laws] - Add translation keys for #276
  * [admin-sidebar] - Add translation keys for #275
  * Merge branch 'admin' into development
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * [admin] - Force list section on sidebar for law edit view
  * [admin-laws-form] - Add summary field to form and fix tabindex and options selected query
  * [admin-laws] - Fix split of list and form views into sepparate components
  * [admin-laws-form] - Moved from `admin-laws`
  * [admin] - Add common styles for admin sections
  * [admin-tags] - Update list view
  * [admin-laws] - More form style fixes
  * Update `README.md` with team categories
  * [homepage] - Add confirmation dialog styles
  * [admin-laws] - Update pre-delete clause modal message and dont focus on cancel
  * [admin-laws] - Add basic confirmation alert before deleting a clause
  * [admin-laws] - Update styles for list view
  * Refactor logout to use a middleware. Closes #273
  * Add redirect to  after logout #273
  * Refactor logout to use new  component #273
  * Add  component #273
  * [admin-laws] - Update list view. Add remove clause method and mechanics.
  * [law] - Add remove clause endpoint
  * [db-api:law] - Update method .update to properly update 1 by 1 law clauses with new content
  * [admin-laws:law-form] - Parse clauses input names before sending on POST request
  * Refactor header into independent component. Closes #265
  * Refactor
  * Remove leftover trace and fix block comment
  * [admin-laws] - Add simple clauses creation mechanics
  * [law] - Add clause API endpoint method to create/update law clauses
  * [models:law] - Convert to Schema law's clauses prop. Add mock to ClauseSchema to update. EmbededDocs have no method update
  * Merge pull request #268 from maraoz/add/contributing-explanation
  * added git pull request contribution workflow
  * [proposal-article] - Add unescaped summary to display law with line breaks. Closes #196
  * [signin] - Add form disabling when posting signin data. Closes #199
  * [laws] - Pin visionmedia/debug to 0.7.4 version #267
  * [laws-filter] - Pin visionmedia/debug to 0.7.4 version #267
  * [db-api:tag] - Remove normalize module dependencies from tag model. Closes #264
  * [db-api:tag] - Add tag hash normalization when creating a new tag. For existing tags, hash should not be changed as it is used to fetch their image. Issue #264
  * Add 'jade' to header's package.json and fix branch build
  * Refactor main components for #265. BREAKING
  * [tags] - Add visionmedia/debug missing component #264
  * [laws] - Add visionmedia/debug missing component #264
  * [utils] - Add normalize function to utils and rename old normalize function to sanitaze #264
  * [db-api:tag] - Remove deprecated functions #264
  * [models] - Add utils to tag model #264
  * [tag] - Add create and edit tag server side endpoints #264
  * [admin] - Add tag create and edit client endpoints
  * [admin-tags] - Add form-view and template to edit/create a tag #264
  * [admin-tags] - Add tags admin to list existing tags #264
  * [admin] - Add tags list rendering inside content #264
  * [admin-sidebar] - Add tag list and create options #264
  * [boot] - Enable admin page for booting
  * [admin] - Add new sections /law/create and /law/:id for create and edit laws
  * [admin-laws] - Initial commit
  * [db-api:law] - Add new method `.update(id, data, fn)`
  * [law] - Add restrict and staff middlewares for /law/:id POST endpoint
  * [law] - Add /law/create and /law/:id POST endpoints for admin law edition
  * [tag] - Add /tag/all endpoint
  * [tags] - Initial commit
  * Merge tag '0.3.2'
  * Release 0.3.2
  * Refactor i18n for 'comments' to 'arguments'. Closes #263
  * Release 0.3.1
  * Fix click on home logo. Closes #262
  * Release 0.3.0
  * Adds check to voted laws in sidebar list. Closes #226
  * [laws] - Add self binding for middleware usage
  * Fixed some typos reported by users
  * Localized 'or' in 'login required' messages
  * [build] - Update middleware build check
  * Restored some not-dead code I accidentially removed before. Closes #257
  * Removed some dead code
  * Added count numbers to status filters. Closes #238
  * Updated 'Hide voted' translation
  * Completed i18n for #255
  * Fixed styles for #255
  * Minor updates to css for #255
  * Removed a leftover trace
  * [admin-sidebar] - Update sections with placeholder for new sections format. #240
  * [admin] - Update client routing to match chained sections of admin pages. #240
  * [config] - Add `staff` config key from environment. Closes #241
  * [law] - Add staff middleware check for `/law/create`. #241
  * [utils] - Add `utils.staff` helper middleware to block non-staff. #241
  * [admin] - Add `citizen.isStaff` middleware to admin pages. #241
  * [citizen] - Add `isStaff` middleware check
  * [citizen] - Add exposure of `staff` prop on citizen
  * [models:citizen] - Add staff virtual property to model
  * [config] - Add `staff` prop to sample.json. #241
  * [admin-sidebar] - Fix error when no section found on `.set`
  * [admin] - Basic layout for Admin pages. Closses #240
  * [admin-sidebar] - Basic sidebar for Admin layout. #240
  * Merge branch 'filters-v2' into development
  * Last fixes, renamings and refactors for #253. Ready to merge to development
  * Styles for #220 and #218
  * Completed mechanichs for #218. Only thing missing is CSS
  * Added hide-voted checkbox functionality to filter view. Closes #220
  * Added warning for no IE 9- support
  * Finished open/closed filter for #220
  * More WIP for #218 and #220. LEAK on  and  when subscribing to events
  * [translations] - Fix typo on a translation message
  * [signup] - Fix input fields tabindex attribute
  * [translations] - Add translations to link to signup from /signin page. Closes #248
  * [signin] - Add link to signup #248
  * Merge branch 'split-fullname' into development
  * [translations] - Add firstName and lastName translations and remove the ones for fullName
  * [signup] - Split fullname into two separate fields (firstName and lastName)
  * [citizen] - Remove fullname setter. Fullname is split into firstName and lastName and set separately
  * WIP for #218 and #220. Closes #246
  * Merge branch 'development' into filters-v2
  * Release 0.2.9
  * Add support for inheritance locals merge at render
  * Release 0.2.8
  * Bump merge-util version
  * Wip #218 and #220. Finally fixed the re-rendering of filter.js with help from @cristiandouce
  * Release 0.2.7
  * Remove json build script forgotten require
  * Release 0.2.6
  * [build] - Improve logging
  * [build] - Remove deprecated json.js builder plugin
  * [build] - Improve jade build script
  * Rename templates compiler since only compiling jade
  * WIP #218 and #220
  * Merge branch 'development' into filters-v2
  * Toggle/hide signin/signup links on header. Closes #136
  * Merge branch 'mongoose-gravatar' into development
  * Release 0.2.5
  * Restore participants ids on law article view
  * Release 0.2.4
  * Merge branch 'expose' into development
  * Apply exposure function to filter content delivered to client by API endpoints
  * [comments-view] - Fix random bug on responses without body
  * Rename `utils.map` to `utils.expose`
  * Deprecate `utils.merge` in favor of `merge-util`
  * Merge pull request #239 from DemocracyOS/master
  * Merge branch 'fix-issue-233'
  * Merge branch 'fix-issue-233' into development
  * Release 0.2.3
  * Fix dependency override of `component/delegate` by `component/tip`. Closes #233
  * Release 0.2.2
  * Bump `component/events` to 1.0.5
  * More work on #218 and #220
  * Made  a separate script. WIP #218, #220
  * Release 0.2.1
  * Merge branch 'development' into filters-v2
  * Added simple  object in . WIP #218, #220
  * [utils] - Update restrict function middleware
  * [citizen] - Add missing semicolons
  * [citizen] - Remove /citizen/all API endpoint. Closes #236"
  * Fix typo on require 'lib/accepts'. Closes #237
  * [delegation] - Reject not json requests. Related #237
  * [comment] - Reject not json requests. Related #237
  * [tag] - Reject not json requests. Related #237
  * [proposal] - Reject not json requests. Related #237
  * [law] - Reject not json requests. Related #237
  * [citizen] - Reject not json requests. Related #237
  * [accepts] - First commit.
  * [boot] - Remove path '/auth/facebook' from page's routes.
  * Fix error on vote click while unlogged
  * Update to component/events@f445d
  * Pin all component dependencies. Closes #231
  * Merge branch 'development' into filters-v2
  * Work for #218, #219 and #220. Closes #219
  * Update component-builder and component
  * [config] - Improve logs and avoid exposing configuration vars to log
  * Update Makefile
  * Update dependency 't-component' to 1.0.0
  * Added list.js to 'scripts' entry in component.json
  * Change t-component from cristiandouce/t to component/t
  * [sidebar-list] - Split sidebar-view into subviews list-container and filter-container. BREAKING
  * Renamed list-block.jade to sidebar.jade
  * [sidebar-list] - More placeholder code. BREAKING
  * [sidebar-list] - BREAKING: some placeholder commits for code
  * Fixes by @cristiandouce 's suggestion
  * [boot] - Add store server support routes to boot
  * [laws-filter] - Initial commit
  * [store] - Initial commit
  * Release 0.2.0
  * Merge branch 'master' into release-v0.2.0
  * Merge branch 'filters-v2' of github.com:DemocracyOS/app into filters-v2
  * Added styles file for #218 and #220
  * Fixed translation key
  * [sidebar-list] - Use new laws local component
  * [laws] - Fix component.json and change 'init' state to 'initializing'
  * Merge branch 'filters-v2' of github.com:DemocraciaEnRed/app into filters-v2
  * Merge branch 'filters-v2' of github.com:DemocraciaEnRed/app into filters-v2
  * [laws] - First commit of new component
  * Fixed translations for #218 and #220
  * Added basic UI (no styles) for #218 and #220
  * [law] - Fix upvote/downvote comment action on law comments list
  * Added toggle button group for #218 and #220
  * [homepage] - Main styles, make header nav user dropdown without borders
  * Fixed profile name input validations and rules. Fixes #221
  * Bump mongoose-gravatar to 0.2.1
  * Bump mongoose-gravatar to 0.2.0 and apply changes to plugin options
  * Add default value for gravatar
  * Profile uses citizen.gravatar instead of .avatar
  * Disable changing email. Fixes #223
  * Merge pull request #217 from DemocracyOS/settings
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Merge branch 'development' into setup
  * Added some missing translations. Closes #214
  * Merge pull request #208 from DemocracyOS/mongoose-gravatar
  * Merge pull request #209 from DemocracyOS/settings
  * fixed style for active selection. Closes #201
  * Add translations. Closes #202
  * [db-api] - More use of `utils.pluck` helper method.
  * [db-api:comment] - Use of `utils.pluck` method
  * Forgot to add mongoose-gravatar to package.json Close #203
  * [boot] - Use Citizen's gravatar() new method
  * [participants-view] - Use gravatar key instead of avatar
  * [comments-view] - Use gravatar key instead of avatar
  * [citizen] - Map JSON response with new utils helpers
  * [law] - Map returned values with new utils helpers
  * [models:citizen] - Use of mongoose-gravatar plugin
  * [db-api] - Select email for proper gravatar plugin use
  * [utils] - Add `pluck`, `map`, `get` and `normalize` helpers
  * Merge branch 'fix-unpinned-deps' into development
  * Release 0.1.1
  * Pin deps to avoid installation crashes
  * [db-api:token] - Remove all tokens of same scope when creating new one
  * [db-api:citizen] - Log error if citizen not found by email and return false
  * [settings-profile] - Add link to change avatar at gravatar.com. Close #201
  * [settings] - Hide from sidebar under development link pages. #201
  * [settings-profile] - Change heading container class. #201
  * [settings-password] - Chance heading container class. #201
  * [settings] - Improve page's rendering
  * [settings] - move title to the top-left of the form page. #201
  * [democracyos] - Update some deps
  * [mailer] - Use config module and add some coding style fixes
  * [models] - Use config module to retrieve mongoUrl
  * [setup] - Remove `express.router` from setup
  * [setup] - Remove unnecesary application settings
  * [boot] - Add `express.router` middleware at boot level
  * [democracyos] - Booting API from boot instead of root
  * Merge branch 'settings' into setup
  * [boot] - var always first
  * [config:index -> setup:index] - Create new setup module for routing app configuration
  * [settings] - Remove old code
  * update laws fixtures
  * [settings] - Add some CSS fixes for container layout
  * [settings-profile] - Hide template by default and show depending on page
  * [settings-password] - Several adjustments to view, validators, and template
  * [settings] - Add change password page to settings
  * update fixtures for a law
  * [homepage] - Scroll auto for section #content
  * [settings-profile] - Sync citizen after successful profile update
  * [settings] - Add handler for POST /settings/profile
  * [settings] - First steps into multiple settings page migration
  * [settings-password] - First commit
  * [settings-profile] - First commit
  * Merge branch 'v0.1.0'
  * Release 0.1.0
  * [proposal-options] - Remove 'why results not shown' box. Close #193
  * [citizen] - Less verbose logging for better follow up
  * [db-api:citizen] - Less verbose logging for better follow up
  * [law] - Less verbose logging for better follow up
  * [db-api:comment] - Less verbose logging for better follow up
  * [db-api] - Rename mapByProperty to 'pluck'
  * Merge branch 'development' into settings
  * [config] - Remove connect.multipart deprecation warning.
  * [boot] - Change menu /account for /settings
  * [settings] - Fix broken references to /account
  * [account -> settings] - Moved
  * Update README.md
  * Merge branch 'fix-commenting' into development
  * [comments-view] - Fix cannot comment on law for all browsers. Closes #185
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * [comments-view] - Replace all querySelector for cristiandouce/query
  * [account] - Remove unused component/domify
  * [account] - Use cristiandouce/query instead of querySelector
  * [proposal] - Code style, always 'var'
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [proposal-list] - Remove deprecated component
  * [proposal] - Remove 'proposal-list' as dep in favor of 'sidebar-list'
  * [law] - Remove 'proposal-list' as dependency
  * Merge branch 'dropdown-clickable' into development
  * [sidebar-list] - Add data-toggle=dropdown to current-department. Closes #182
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * [account] - Update i18n
  * [account] - Add account page
  * Merge branch 'parse-comment-line-breaks' into development
  * [models/comment] - Add reduce line breaks method #169
  * [comments-view] - Add comments paragraphs split #169
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [proposal-options] - Remove chart animation. Close #186
  * Update README.md
  * [token] - Remove previous tokens for a citizen before creating a new one
  * [token] - Remove token after being used. Closed #50
  * Merge branch 'popover' into development
  * [proposal-options styles] - Add styles for rendering the alert block with a margin top
  * [proposal-options] - Add alert block for displaying the reason for not showing the partial results
  * [homepage styles] - Add alert-block for a greyish bacgrkound color alert.
  * [signin] - Fix title for i18n. Close #179
  * [forgot] - Remove domify in favor of render component
  * [forgot] - Replace document.querySelector in favor of cristiandouce/query
  * [signup] - i18n for page titles. #179
  * [signin] - i18n for page titles. #179
  * [forgot] - i18n for page titles. #179
  * [democracyos] - Bump engines in package.json file. Close #166
  * [homepage] - Fix styles for header z-index. Close #184
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [democracyos] - Add CONTRIBUTING.md
  * Merge branch 'email-validation' into development
  * [signup] - Resend email validation: check email address exists
  * [signin] - Validate email address validated
  * [signup] - Email validation, handle errors - not finished
  * Merge branch 'development' into email-validation
  * [signup] - Resend validation email
  * [translations] - Fix typo on spanish message
  * [translations] - Add clarifyin messages for why the results are not shown during voting
  * [proposal-options] - Add 'Results will be shown when law is closed' message
  * [homepage] - Add styles for the 'Results will be shown when law is closed' message
  * [signup] Email validation
  * Merge pull request #159 from DemocracyOS/add/limit-users-comments-length
  * [styles] - Fix bad stylus compiled css
  * Merge branch 'tooltip-spam' into development
  * [styles] - Fix display to inline-block of anchors to be tooltiped, for the tooltip to stay in a centered position
  * [comments-view] - Add tooltip to flag
  * Merge branch 'tooltip-centered' into development
  * [participants-view] - Fix centered tooltip. Closes #180
  * [comments-view] - Fix bug for comments not showing more
  * [translations] - Fix translations for new comment upper limit to 4096
  * [models:comment] - Upgrade comments upper limit to 4096
  * [comments-view] - Raise comments limit to 4096
  * [comments-view] - Fix errors handle and classes to not overlap with general styles
  * Merge branch 'development' into add/limit-users-comments-length
  * [participants-view] - Fix tooltip to centered position
  * Merge branch 'development' into email-validation
  * [signup] - Fix errors list for Firefox
  * [signin] - Fix errors list for Firefox
  * [sidebar] - Fix current department for Firefox
  * [forgot] - Fix errors list for Firefox
  * [comments-view] - Fix comments counter for Firefox
  * [auth] - Remove fb/tw auth strategies. #129
  * [title] - Fix component.json and local query name
  * [forgot] - Update page's title with title component. #175
  * [signup] - Update page's title with title component
  * [signin] - Add forgoten title component require. #175
  * [signin] - Missing semicolon
  * [law] - Use of title component and make pagechange more clear with inline comments
  * [signin] - Update page's title with title component. #175
  * [title] - Make organization title always default and avoid passint it all time
  * [title] - First commit
  * [law] - Replace document.querySelector for cristiandouce/query
  * [law] - Add mediaTitle to 'head title'. Close #175
  * [homepage] - Simple render
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [config] - Remove Facebook/Twitter auth keys from config. Close #129
  * fix bug when bills showed only 1st article. Fixes #177
  * Enable copy config files on makefile dos-install
  * [bin:dos-install] - Add automatic config copy/merge for first install
  * [bin:dos] - Remove whitespace
  * new chart for results: https://cloudup.com/cDKbAhdBZvR
  * [boot] - Add target="_blank" to organization link
  * Merge branch 'development' into email-validation
  * [sidebar-list] - Clear click binding
  * [sidebar-list] - Add/Update logs
  * Use of cristiandouce/events to avoid ugly bug till update of component/events
  * Fix typo deparment for department
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [forgot] - Fix typo at component.json
  * [comments-view] - Replace superagent for request component
  * [forgot] - Replace superagent for request component
  * [homepage] - Deprecate document.querySelector in favor of cristiandouce/query
  * [homepage] - Replace superagent for request component
  * [participants-view] - Replace superagent for request component
  * [proposal-options] - Replace superagent for request component
  * [signup] - Deprecate document.querySelector in favor of cristiandouce/query
  * [signup] - Replace superagent for request component
  * [signin] - Deprecate document.querySelector in favor of cristiandouce/query
  * [signin] - Replace superagent for request component
  * [sidebar-list] - Replace superagent for request component
  * [proposal] - Replace superagent for request component
  * [law] - Replace superagent for request component. Also close #170
  * [citizen] - Replace superagent for request component
  * [request] - Remove forgotten console.log()
  * [request] - Wrapper of visionmedia/superagent. Close #172
  * Merge branch 'fix-voting-ie' into development
  * Closes #135. IE9 reloads on each page request, unbinding the click event for page.js
  * [proposal] - Remove whitespace
  * [browser-lock] - Pin dependencies
  * [proposal-options] - Remove duplicated require for t component
  * [proposal-options] - Replace querySelector for sizzle supported cristiandouce/query
  * [config] - Remove whitespace from sample.json
  * Merge pull request #167 from DemocracyOS/truncate-comments
  * [comments-view] - Add comments truncated to 230 characters with a 'read more' link. Closes #142
  * [boot] - Add google analytics
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [proposal-options] - Compile census from upvotes, downvotes and abtentions. #160
  * [models:law] - Do not repeat votes served. #160
  * [boot] - Allow branding
  * [render] - Add config to default parameteres
  * [db-api:comment] - Fix misnamed functions
  * [sidebar-list] - Sort by participants instead of counted votes
  * [models:law] - Fix virtuals when limiting returned fields to not broke. #160
  * [db-api] - Reduce served info to only what's used. #160
  * [law] - Fix typo on 'erros' and call correct attributes on error
  * [comments-view] - Errors are added to the error div as strings and not as object accessing their attributes
  * [feedback/uservoice] - Feedback only on top bar
  * [translations] - 'Suggestion' key changed to 'Feedback'
  * [participants-view] - Edit fetch fot post instead of get because of 414 Request-URI Too Large. #155
  * [citizen:endpoint] - Add post /citizen/lookup method for 414 Request-URI Too Large. #155
  * [participants-view] - Edit view more text button
  * [proposal-article] - Fix merge conflict for participants view
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [comments-view] - Hide number from unlogged users. #143
  * [comments-view] - display error message on server side error
  * fix css chart results now responsive
  * Merge branch 'restrict-fields' into development
  * [citizen] - Don't retrieve citizen's hash and salt
  * fix css participants
  * [comments-view] - Simple error handling
  * [law:endpoint] - Simple error handling
  * Merge branch 'development' into add/limit-users-comments-length
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [proposal-article] - Add 'participants-view' to article render. Close #155
  * [participants-view] - Add 'more' event handler. Add 'classes' and fixes to view handling. #155
  * [db-api:citizen] - Fix log error
  * [db-api:law] - Remove participants population. #155
  * [citizen:endpoint] - Unrestrict lookup and split ids string into array. #155
  * [citizen] Removed unused schema fields address, hometown, location
  * [participants-view] - Add component/tip to each participant. #155
  * [db-api:citizen] - Fix typo. #155
  * [participants-view] - First commit. #155
  * [citizen:endpoint] - Add lookup endpoint by participants. #155
  * [citizen:endpoint] - Remove whitespace
  * [db-api:citizen] - Add citizen.lookup by ids #155
  * fix css small details
  * fix css small details
  * fix css forgot password
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [UserComment] - server side validation for commenting a law
  * [browser-lock] - Remove old querySelector support
  * update demo version warning text and link. Closes #147
  * Merge branch 'development' into add/limit-users-comments-length
  * [law] - Remove wait middleware
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [law] - Apply browser lock on page:change
  * [homepage] - Apply browser lock on page:change
  * [browser-lock] - First commit
  * [comment-validation] working on server side validation
  * fix es translation for 'password' to 'contraseña'
  * [forgot] - Show 'No citizen for email aa@aa.com' if email not found on mongo. Close #149
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [utils] - Add log prefix 'democracyos:' for better debug
  * [tag] - Add log prefix 'democracyos:' for better debug
  * [sidebar-list] - Add log prefix 'democracyos:' for better debug
  * [registration] - Add log prefix 'democracyos:' for better debug
  * [proposal] - Add log prefix 'democracyos:' for better debug
  * [proposal-options] - Add log prefix 'democracyos:' for better debug
  * [models] - Add log prefix 'democracyos:' for better debug
  * [mailer] - Add log prefix 'democracyos:' for better debug
  * [law] - Add log prefix 'democracyos:' for better debug
  * [homepage] - Add log prefix 'democracyos:' for better debug
  * [forgot] - Add log prefix 'democracyos:' for better debug
  * [delegation] - Add log prefix 'democracyos:' for better debug
  * [db-api] - Add log prefix 'democracyos:' for better debug
  * [comments-view] - Add log prefix 'democracyos:' for better debug
  * [comment] - Add log prefix 'democracyos:' for better debug
  * [citizen] - Add log prefix 'democracyos:' for better debug
  * [build] - Add log prefix 'democracyos:' for better debug
  * [auth] - Add log prefix 'democracyos:' for better debug
  * [comments-view] - Tooltips for upvote, downvote and flag
  * [Feedback] - Feedback button moved to left when signedin
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * User feedback link on top bar. Closes #152
  * Revert "[proposal-article] - Hide socialshare buttons"
  * [comments-view] - Hide upvote/downvote and flag buttons if no user logged in. Close #137
  * [proposal-article] - Add recent 'render' component
  * [render] - First commit
  * [homepage] - Fix stylus sheet indentation problem
  * [homepage] - Convert all indentations to tabs
  * [homepage] - Fix dropdown button on windows
  * [signup] - Remove missing console.log
  * [node-path] - Deprecated in favor of cristiandouce/node-path
  * [bin] - Update to use node-path dep
  * [config] - Update to use node-path dep
  * [models] - Update to use node-path module dep
  * Add node-path@0.0.3 to deps
  * Revert "remove uservoice plugin for live demo"
  * Merge branch 'master' of heroku.com:democraciaenred into democraciaenred
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Fix css
  * fix css
  * remove uservoice plugin for live demo
  * Special fixes for public demo
  * fix i18n, typos and non-validated signup date limit
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [comments-view] - Add live update to comment count when user clicks button
  * Fix css
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [homepage] - Add styles to comment counter label
  * [comments-view] - Add comment counter label
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Fix more i18n on signup/signin. Closes #89
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [homepage] - Restore comment actions button colors
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Fix css
  * Add i18n for signin/signup errors. Fixes #89
  * Fix css
  * [proposal-article] - Hide socialshare buttons
  * [fixtures] - Update law fixtures
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Fix css
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [homepage] - Add css to hide report flag when comment is hidden as spam
  * [homepage] - Add css to display comment actions without transform
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Fix css
  * Fix css
  * Fix css
  * Fix css
  * fix gender-insensitive spanish translation
  * Merge pull request #131 from DemocracyOS/signin-signup-styles-broken
  * Fix css. Closes #116
  * Fixes header
  * Fix css. Closes #116
  * Fix css. Closes #117
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Fix css. Closes #117
  * [proposal-options] - Show voting buttons even if user is not signed in
  * [fixtures] - Added source
  * Change my vote (css)
  * Fix css comments & alerts
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Fix css comments & alerts
  * [closing-at] - Convert String closingAt to Date
  * [IE9/Placeholders] - Add script to fix placeholders in IE9 without jQuery
  * [IE9/Placeholders] - Add script to fix placeholders in IE9 without jQuery
  * [FF/Styles] - Add hidden overflow to form-group for it to begin a new line when the width is overflowed. Close #91
  * Merge branch 'comments' into development
  * [comments-view] - Sort comments by score.
  * [homepage] - Add styles for #115
  * [comments-view] - Add spam functionality. Close #115
  * [models:comment] - Typo comment
  * [models:flag] - Add flagging methods. #115
  * [db-api:comment] - Add flag and unflag api methods. #115
  * [comment:endpoint] - Add unflag endpoint. #115
  * [config] - Accept empty string port number
  * [config] - Replace port by privatePort and publicPort
  * [facebook-card] - User url component to build urls
  * [proposal-article] - Use protocol config variable
  * [config] - Use HTTP_PORT instead of PORT env variable
  * [homepage] - Add style to like/dislike buttons. #114
  * [comments-view] - Add like and dislike buttons to comments. Close #114
  * [sidebar-list] - Fix wrong reference to discore/closest
  * [sidebar] - Remove creation date and add participants and closing date
  * Merge branch 'truncate-participants' into development
  * [article-proposal] - Hide over 10 participants
  * Fix #121
  * [proposal-article] - Fix typo on template
  * [socialshare] Remove console.log
  * [models:comment] - Add vote methods and paths to model. Close #113
  * [db-api:comment] - Add upvote and downvote methods
  * [comment:endpoint] - Update db-api flat method
  * Merge branch 'socialshare' into development
  * [comment:endpoints] - Restrict routes to logged in users only
  * Merge branch 'development' into socialshare
  * [socialshare] - Fix indentation problem. Close #66
  * [models:law] - Fix typo
  * [socialshare] - Add baseUrl parameter to socialshare links
  * [socialshare] - Make sitename, etc configurable
  * Update package.json name
  * Update component.json name
  * Merge branch 'development' into comments
  * [socialshare] - Add generic cards for TT and FB
  * [socialshare] - Add baseUrl as parameter
  * [socialshare] - Add homepage cards for TT and FB
  * [twitter-card] - Fix url with path.join
  * [facebook-card] - Fix url with path.join
  * [socialshare] - Implement twitter card and facebook card
  * Merge branch 'development' into socialshare
  * Merge branch 'development' into socialshare
  * [translations] - Add 'You must be signed in to vote...' to dictionaries. #112
  * [proposal-options] - Add message 'You must be signed in to vote...'. Close #112
  * Merge branch 'development' into socialshare
  * [translations] - Fix typo. #112
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [translations] - Add message for unlogged users at comments block. #112
  * [comments-view] - Add message and link to signin/signup for unlogged users. #112
  * [balance] - Fix cluser 'exit' callback
  * [comment] - Add endpoints for upvote/downvote/report. #113
  * [balance] - Fix cluser 'exit' callback
  * Close #109
  * [homepage] - Less verbose log message
  * [law] = On path change scroll 'section#browser' to top. Close #82
  * [homepage] - On path change, scroll section#browser to top. #82
  * [forgot] - Provide mailer with mandrill tags custom prop. Close #51
  * [forgot] - Rename passwordResetToken local var to 'token'
  * [mailer:mandrillMailer] - Allow custom options to be provided by user for mandrill message
  * [homepage] - Adjust inline images in clause paragraphs
  * Fix #105 typo
  * Close #105
  * Merge branch 'development' into caballito
  * new laws.json and jade fix for #105
  * [proposal-article] - Restore HTML support for article's clauses
  * [forgot] - Parse and pass request headers 'user-agent', 'host', 'referer', 'origin' and 'ip' and 'ips' as token metadata
  * [db-api:token] - Apply metadata submission with 'reset-password' token creation
  * [models:token] - Add 'meta' prop for request tracking metadata
  * [translations] - Add forgot request success message. #44
  * [forgot] - Add success message trigger after reset request successfull. Close #44
  * [forgot] - Log user in after password succesfull reset. Close #94
  * [forgot] - Remove unused css
  * [twitter-card] - Create twitter card middleware
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [translations] - Add 'read more' to 'en','es' dictionaries
  * [proposal-article] - Truncate clauses and add 'read-more' trigger
  * Update README.md
  * Update README.md
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [democracyos] - Apply new balance module for application clustering
  * [balance] - First commit
  * index.js code-style
  * Update README.md
  * logo clickable
  * logo clickable
  * fixes css
  * fixes css
  * fixes css
  * fixes css
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * better responsive
  * better responsive
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [boot] - Close snapper menu on `page:change`
  * [law] - Remove snapper
  * [law] - Close snapper on page change
  * [boot] - Replace snap with snapper component
  * [snapper] - First commit for responsive snapper component
  * better responsive
  * better responsive
  * iOS images
  * iOS images
  * iOS images
  * Making it responsive
  * Making it responsive
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [proposal-article] - Add blank target to DB deletion alert
  * Making it responsive
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [proposal-options] - Update chart title
  * Making it responsive
  * [translations] - Add 'Summary' and 'Chart'
  * [translations] - Add 'vote'
  * [proposal-options] - Improve plurals for votes count
  * [translations] - Add 'No votes cast'
  * Making it responsive
  * Making it responsive
  * [proposal-options] - Better alert when no votes cast
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [proposal-options] - Improve results box
  * Making it responsive
  * Making it responsive
  * Making it responsive
  * [proposal-article] - Fix again closing date
  * Making it responsive
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Revert "[boot] - Make db deletion warnging open in target=_blank"
  * Revert "[proposal-article] - Fix closing date container display"
  * Making it responsive
  * Making it responsive
  * [proposal-article] - Fix closing date container display
  * [boot] - Make db deletion warnging open in target=_blank
  * [proposal-options] - No longer hide results box waiting for show triggering
  * [proposal-options] - Remove toggle results button
  * fix icons sidebar
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [boot] - Fix jade's syntax
  * Merge branch 'development' into socialshare
  * fix icons sidebar
  * [index] - Fix broken jade sintax
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Merge branch 'i18n' into development
  * Close #95
  * Merge branch 'development' into socialshare
  * [translations] - Add 'Unknown closing date' i18n
  * [proposal-article] - Add unknown closing date message if missing
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [index] - Add label "Database will be dumped on December 10". Closed #84
  * fix icons sidebar
  * fix icons sidebar
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * new icons
  * [article] Dont use oscar's S3 account for docs, use partidodelared's account. Closed #83
  * [trasnlations] - Signup form title i18n
  * [proposal-options] - Fix odd bug with census count
  * [translations] - More translations for #33 and #34
  * [translations] - Add i18n for Bill time span #33 and #34
  * [homepage] - Bill time span UI decoration. Close #34
  * [proposal-article] - Closing time for bill. Close #33
  * [proposal-article] - Add closing time span. #33 and #34
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [homepage] - Styling article
  * [proposal-options] - Show/hide results and vote-box in different situations. #34
  * [proposal-article] - Beautify article view
  * [comments] - Hide deleted comments. #72
  * Merge branch 'i18n' into development
  * Fix #89 and added protocol in config
  * [sidebar-list] Bill sorting by closingAt and number of votes. Closes #68
  * [homepage] - Change first name's style next to user icon. Closed #69
  * Merge branch 'i18n' into development
  * Close #75
  * #75 i18n'd signup success message
  * Merge branch 'development' into i18n
  * Update color code for uservoice widget
  * Update coloc code for uservoice widget
  * Update README.md
  * [homepage] - Uservoice position real fix
  * [boot:uservoice] - Remove missing comma
  * [boot] - Fix uservoice positioning by moving script to bottom
  * [homepage] - Fix login/signup buttons styles. Close #63
  * [forgot] - Add message in form
  * [signup] - Fix tag indentation for input in form
  * [signup] - Welcome message
  * [signup] - More of beautify signup complete messages
  * [signup] - Beautify signup complete messages
  * [forgot] - Move button text to form header
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [forgot] - Typo
  * [forgot] - Attach event submit to handler on reset form
  * [forgot] - Beautify forgot form. #63
  * [forgot:reset] - Add style to button submit
  * [forgot:reset] - Add title to reset form
  * [forgot:reset] - Beautify reset form
  * [signup] - Fix form view parse
  * [signup] - Beautify form
  * Merge branch 'development' of github.com:DemocracyOS/app into development
  * Merge branch 'uservoice' into development
  * [singin] - Beautify form ui. #63
  * Close #78
  * [proposal-comments] - Delete
  * [proposal] - Replace proposal comments component
  * [law] - Fix broken article view. Close #85
  * [homepage] - Fix broken article view. #85
  * [proposal-options] - Improve render method
  * [proposal-options] - Apply standard `this.el` for view template instance
  * [commens-view] - Improve render method
  * [homepage] - Add first name next to user icon. Closed #69
  * Fixed typo
  * [article] social sharing metatags
  * Merge branch 'development' into socialshare
  * [fixtures] - Fix typos
  * [signin] - Remove forgoten console.logs
  * [sidebar-list] - Remove forgoten console.logs
  * [homepage] - Preserve currently selected item if there is any. Close #79
  * [sidebar-list:view] - Add 'selected' method to retrieve current item
  * [proposal-article] - Improve render method
  * [proposal-article] - Add standard  as template el
  * [proposal-article] - Remove parent container
  * [signup:page] - Improve rendering page and add 'signup-page' class to body
  * [signin:page] - Add class 'signin-page' to body
  * [signin:view] - Improve render method
  * [signin:view] - Add standard `this.el` as template el
  * [signin] - Fix forgot password route
  * [forgot] - Improve page rendering
  * [sidebar-list:view] - Improve render method
  * [sidebar-list] - Remove parent container from template
  * [homepage] - Put content over browser and hide if browser page is load
  * [boot] - Add #browser sub-containers
  * [law] - Add class 'browser-page' and remove on pagechange
  * [homepage] - Add class 'browser-page' and remove on pagechange
  * [body-classes] - Remove all but 'browser-page'
  * [boot] - Add 'body-classes' component to boot
  * [config:env] - Fix add default client config from env variables
  * [config] - Add key 'env' for enviroment quick detection
  * [config] - Add new key 'env' to client keys
  * [body-classes] - First interaction with body classes
  * [proposal-article] - Use config host and port
  * [forgot] - Render reset form after token verification. Close #45
  * [proposal-article] - Use config host and port
  * [fixtures] Typo
  * [article] - Metatags for TT and FB
  * Merge branch 'development' into socialshare
  * [utils] - Fix merge with type-component to filter [object Object] only
  * Merge branch 'development' into socialshare
  * [config] - Fix default client config variables
  * Merge branch 'development' into socialshare
  * [config] - Add client host and port to env.js
  * Merge branch 'development' into socialshare
  * [comment] - Expand comment textarea to 4 rows
  * Merge branch 'development' into socialshare
  * [forgot] - Fix routes
  * [forgotpassowrd] - Move to `lib/forgot`
  * [forgotpassword] - Make resetURL sensitive to environment settings. Close #48
  * [config] - Remove protocol from host
  * [proposal-article] - Add icon to 'View original text' link
  * [homepage] - Add more link styles
  * [homepage] - Make links look like links. Close #64
  * [config] - Add client side component pack
  * [config] - Fix wrong parse of environment port read
  * [config] - Extend paths for config module. Hack.
  * [config] - Add client-side config keys for dynamic compilation
  * [bin:dos-build] - Add client side config compilation to build process
  * [proposal-article] - Hide social sharing till milestone end. Close #65
  * [translations] - Add 'Partial results' to dictionaries
  * [models:law] - Fix non repeating participants. #42
  * [proposal-options] - Fix for options not being displayed after voting
  * [db-api:law] - Don't request for participants when loading all. #59
  * [models:law] - Add more indexes to improve performance. #59
  * [proposal-article] - Remove '10 days left' while not closing date available. #42
  * [homepage] - Styles for tag and title labels. #42
  * [proposal-article] - Add tag label and display lawId as label too. #42
  * Merge branch 'i18n' into development
  * Close #43
  * [proposal-options] - Hide for unlogged users. Close #56
  * [db-api:law] - Populate participants for #42
  * [models:law] - Add participants for #42
  * [homepage] - Fix dropdown button styles for #42
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [homepage] - Some UI styles fixes for #42
  * [proposal-options] - Vote recount UI fixes. Close #36
  * [boot] - Load last bootstrap from CDN
  * [homepage] - Styles
  * [forgotpassword] Harcode prod url instead of dev url
  * [comments] - Hide comments form when not logged in
  * Merge branch 'i18n' into development
  * [law] Add media title and description
  * fix autocomplete initialization
  * Merge branch 'development' into i18n
  * [translations] - Restore paths to dictionaries
  * [build] - Conserve relative paths for compiled templates and json files
  * A lot of WIP in #43
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [sidebar-list] - Make dropdown filter work. Close #39
  * [sidebar-list] - Make dropdown filter work
  * [models:tag] - Pre-process getters on toObject and toJSON calls
  * [models:tag] - Document code
  * [db-api:law] - Populate tag key for fetchs
  * [proposal-options] - Disable event listener for proxy delegation
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [proposal-options] - Fix casting vote click
  * [proposal-options] - Remove Delegate link until we fully implement it
  * [comment] - Remove link on citizen's avatar
  * Replace title to "Partido de la Red"
  * [law] - Add target url to social sharing links
  * [signup] Improve signup success message
  * [sidebar-list] - Typo
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [law] - Improve law page rendering with new sidebar-list component
  * [homepage] - Improve homepage rendering with new sidebar-list
  * [proposal-article] - Add `.append(el)` method to view
  * [comments-view] - Improve debug log
  * [citizen] - Improve debug log
  * [sidebar-list] - Initial commit
  * [config] - Fix basic auth. For issue #60
  * [config] - Add optional basic auth. close #60
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [models] - Highly improve of responses by indexation
  * [config] Update Mandrill env variable names
  * [proposal-options] - Adjust to new component/events dependency workflow
  * [signin] - Fix form template for correct event binding
  * [signup] - Update site-content container selector
  * [forgotpassword] - Update site-content container selector
  * [signup] - Render sigup in site-content instead of app-content
  * [signin] - Render sigin in site-content instead of app-content
  * [homepage] - Update site-content's styles. Push from top
  * [law] - Update view rendering
  * [homepage] - Update view rendering
  * [proposal-list] - Add list container to template
  * [proposal-article] - Add remaining html to template
  * [boot] - Update template with just one container
  * Merge branch 'login-fixes' into development
  * [signup] Success page
  * [signup] Don't ask for a username
  * [signin/signup/forgot password] Add links to signin, signup and forgot password
  * Merge branch 'development' into login-fixes
  * [homepage] - Real fix for logout button block
  * Revert "[homepage:header] - Solve ugly css bug blocking logout button from dropdown"
  * [homepage:header] - Solve ugly css bug blocking logout button from dropdown
  * [db-api:law] - Make dev logs less verbose
  * [law:endpoint] - Change logs to less verbose
  * [fixtures:laws] - Add last version of laws from bill-scraper project
  * [bin:dos-db] - Don't log unnecesary information
  * [fixtures] Change tags json format
  * [fixtures] Rename categories.json to tags.json
  * Merge branch 'development' into bill-scraper-integration
  * Merge branch 'bill-scraper-integration' into development
  * [models] - Extend module's paths with process' mainModule's paths
  * [node-path] - Little hack for certain modules to extend node paths
  * [bin:dos-db] - Add process path at top of module's paths array
  * [fixtures] Update categories list
  * Merge branch 'bill-scraper-integration' into development
  * [proposal-options] - Remove shitty lines
  * [law:endpoint] - Log ids instead of objects for /law/all route endpoint
  * [bin:dos-db] - recursive path resolve
  * [law] - Use of comments-view instead of proposal-comments
  * [comments-view] - Prevent submit with empty text
  * [proposal-options] - Replace component/delegates for component/events
  * [db-api:law] - Remove forgotten console.log
  * [bin:dos-db] - Resolve relative paths and node modules lookup
  * Merge branch 'vote-delegation' into development
  * Fixes for local laws
  * [law] Accept html clauses, show 'view original text' link
  * [law] Add officialTitle, mediaTitle, summary fields. Add index. Update title virtual function
  * [comments-view] - Clear form after submit
  * [comments-view] - Add cristiandouce/to-array in dependencies
  * Merge branch 'vote-delegation' into development
  * [law:endpoint] - Apply refactored changes to db-api in endpoint.
  * [db-api:law] - Adjust to comment.create refactor api
  * [db-api:comment] - refactor comment.create method
  * [homepage] - Replace proposal-comments for standalone version
  * [comments-view] - First standalone version
  * Minor delegation fixes
  * Fixed 'required' export
  * Merge branch 'development' into vote-delegation
  * Added /api/delegation to root index.js
  * Merge branch 'vote-delegation' into development
  * [law:endpoint] - Add comment action endpoint
  * [homepage] - Show laws by default instead of proposals
  * Merge branch 'development' into voting
  * [db-api] - First version for recount. Probably fail.
  * [models:law] - Close/Recount status for Law vote
  * Json response support for #21
  * [models:law] - Add caster to vote
  * [proposal-options] - Correct use of .toggle() from component/classes
  * [proposal-options] - Unpin component/delegates dep
  * [proposal-options] - Update template
  * [models:law] - Update display methods
  * [models:law] - Comment block
  * [proposal-options] - Change voting route to `/api/law/:id/vote`
  * [proposal-options] - Restore change-vote client support
  * [proposal-options:template] - Support law and proposals
  * Restore vote-box options view
  * Change `req.citizen` for `req.user` since alias is invalid
  * [law] - Log errors as strings instead of objects
  * [db-api:law] - Log errors
  * [models:law] - Change Schema def order to sort bug and Add logs
  * [models:law] - Fix typo.
  * [law] - Add vote route.
  * [law] - Fix log typo
  * [db-api:law] - Add `vote` method
  * [db-api:law] - Spacing
  * [models:law] - Add `vote` and `unvote` instance methods to model.
  * Fix conflicts from Merge branch 'vote-delegation' into 'voting'
  * Fix conflicts from Merge branch 'local-login' into 'voting'
  * [models:law] - Add project as valid LawState
  * [boot] - Remove unused stuff
  * Almost done in #21
  * [forgotpassword] Step2
  * [citizen] Typo
  * Merge branch 'refactor' of github.com:DemocraciaEnRed/app into refactor
  * [democracyos:config] - Machine env overrides local configs
  * [democracyos:config] - Parse to int env port
  * [utils] - Improve merge util with deep merge
  * [config] - Save port from config module
  * [config] - Remove express-url
  * [boot] - Remove whitespace
  * [boot] - Remove whitespace
  * [config] - Apply new config module to express app boot
  * [democracyos:config] - Refactor config module
  * [express-url] - Removed for deprecation.
  * [registration] bugfix: first and last name not being saved on mongo
  * [mandrill] remove harcoded email tag
  * [forgotpassword] use jade to generate mail body
  * [mandrill] update reademe
  * [mandrill] update readme
  * [mandrill] update readme
  * [proposal] - Use of new db-api:proposal API method `.comments()`
  * [proposal-list] - Change list item href
  * [proposal-article] - Update template
  * [law] - Update view
  * [law] - Update log
  * [law] - Add '/law/:id/comments' API endpoint
  * [models:law] - Add `.title` and `.content` virtuals
  * [models:comment] - Update context options
  * [db-api:law] - Add `.comment()` and `.comments()` methods to API
  * [db-api:law] - Rename `mapByProperty` to `pluck`
  * [db-api:proposal] - Add `.comments` method to retrieve comments for proposal
  * [db-api:proposal] - Rename `mapByProperty` to `pluck`
  * [db-api:comment] - Edit `.getFor()` method params
  * [models:citizen] - Rename mapByProperty to pluck
  * [forgotpassword] send email to citizen
  * bit of work on #21
  * [forgotpassword] Rename PasswordResetToken to Token
  * More work on #21
  * [boot] - Law page.
  * [homepage] - Remove unused code.
  * [law] - Add page rendering
  * Merge branch 'local-login' into voting
  * Merge branch 'local-login' of github.com:DemocraciaEnRed/app into local-login
  * [forgotpassword] Rename PasswordResetToken to Token
  * [forgotpassword] Save token
  * Merge branch 'local-login' of github.com:DemocraciaEnRed/app into local-login
  * [citizen] - Comment methods and private functions
  * [proposal] - Remove identity middleware in favor of citizen.optional
  * [homepage] - Remove identity middleware in favor of citizen.optional
  * [citizen] - Add optional middleware
  * [citizen] - Log required middleware
  * A bit of work on #22 and other fixes
  * [models:law] - Add Vote and proxyVote end dates to schema
  * [models:law] - Fix pre-save hook to set `updatedAt` value on save
  * [models:law] - Code style
  * [forgotpassword] minor improvements, still work in progress
  * [models:law] - Glossary fix
  * [models] - Typo
  * [models:law] - Suitable set of options for JSON API response
  * [models:law] - Add voting functionality to Law Model
  * [models:citizen] - Comment update
  * Yet another minor change to check shit
  * Minor commit to check something
  * #21 /remove and some fixes
  * [democracyos:index] - Add signin post routes
  * [boot] - Add signin module for client
  * [signin] - First commit
  * [registration] - Update log
  * [models:citizen] - Update error message when user exists
  * [utils] - Add `.required` params check middleware helper
  * [bin:dos-db] - Changed default db-name to DemocracyOS-dev
  * Merge branch 'local-login' of github.com:DemocraciaEnRed/app into local-login
  * [proposal] - Allow to continue if user is not logued in
  * [homepage] - Allow to continue if user is not logued in
  * [citizen] - Off all `ready` callbacks
  * [forgotpassword] Copy files from signup + search/replace to forgotpassword
  * [build] - Log build
  * [config] - Remove unused middlewares
  * [forgotpassword] Add jade form
  * Update README.md
  * [signup] - Handle response errors from signup post
  * [proposal] - Set new identity check
  * [homepage] - Set new identity check for homepage
  * [citizen] - Refactor of citizen client model
  * [registration] - Fix local registration
  * Some fixes to #21
  * Update http-auth module
  * Changed node_module to node_modules
  * [application:index] - Mount Signup module.
  * [signup] - More and more improvements on local signup.
  * [registration] - Add local signup
  * [build] - Improve build by avoiding multiple requests build.
  * [auth] - Add local signin strategy
  * [regexps] - Add username regexp to collection.
  * Merge remote-tracking branch 'origin/local-login' into vote-delegation
  * [proposal-list] - Typo newlines
  * [proposal] - Typo
  * [homepage] - Render page's container and aside without replaceWith
  * [boot] - Remove placeholder containers
  * Revert "[boot] - Comment unsused 3rd party javascripts"
  * [boot] - Signup component
  * [boot] - Comment unsused 3rd party javascripts
  * [signup] - Render simple signup form
  * [proposal] - Render page's container and aside without replaceWith
  * [proposal-comments] - Typo newline
  * Merge branch 'vote-delegation' into local-login
  * Extra work on #21 and build fix
  * [signup] - First coding mockup
  * Complete backend for #21
  * [boot] - Improve views in favor of component rendering
  * [democracyos] - Mount Law API endpoints
  * [law] - Law API endpoints
  * [db-api] - Add new Law model API.
  * [models:law] - Update Law Model
  * [models:law] - Improve of model
  * [bin:dos-db] - Simple error handler
  * [config] - Change db default name
  * [bin:dos-db] - Add commands load and drop
  * Typo on #21
  * Updated Tags and Delegation models for #21
  * [models:law] - First law model
  * [models] - Comment typos
  * [bin:dos-install] - Output stdout|stderr only if there is some content to show
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Call explicit node on Makefile
  * [bin] - Resolve path for Windows install
  * Update README.md
  * Moved views folder inside lib/boot
  * Moved fixtures inside lib
  * Fixed Makefile
  * Complete commands
  * Rename app.js > index.js
  * Add some usefull silly commands
  * Builder refactor
  * Added blank line for consistency
  * Added fixtures dir and categories
  * [translations] - Pair translations to spanish
  * [proposal-comments] - Add more translations
  * Update component builder
  * [build] - Copy files on build
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [express-url] - Comments
  * Fixed lists
  * Updated FB settings
  * [views:layout] - Remove unnecesary inludes
  * [bin:demenred-build] - Copy files instead of linking
  * removed unnecesary image
  * [bin] - Add forgoten .json files build
  * [views] - Fix icons styles routes
  * [boot] - Add flaticons local dependency
  * [flaticons] - Add icons from public
  * [public] - Remove it.
  * [views] - Remove broken link
  * [build] - Fix removal of .json files after parsing
  * [build] - Remove .json file from files after parsing
  * [translations] - Comments and stuff
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * [proposal-comments] - First translation
  * [builder] - Add json files as js scripts on application build
  * [boot] - Spacing and stuff
  * [boot] - Load translations to translation helper
  * [translations] - Iniial commit
  * fixes css
  * fixes css
  * fixes css
  * fixes css
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Remove jade as a global dependency
  * fixes header css
  * fixes header css
  * fixes header css
  * fixes header css
  * removing vendor css
  * fixes header css
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * fixes header css
  * fix avatar
  * fix avatar
  * fix avatar
  * fix avatar
  * fix avatar
  * Update README.md
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * ui fixes
  * ui fixes
  * ui fixes
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Install and build components on npm post install
  * [bin] - Update db install command
  * Update README.md
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * new_ui
  * [config] Added testing environment
  * [models:proposal] - add trucate dependency and usage
  * [public] - Update build.
  * [homepage] - fix mocked data.
  * [components:regexps] - Add regexps module as a client/server component.
  * [db-api:proposal] - Provide fullName with all proposal's participants.
  * [bin] - Add commands structure
  * Move config/heroku.js to config/env.js
  * [app] - Comments
  * [public] - Update build.
  * [public] - Update build.
  * [boot] - Add auth routes
  * [public] - Update build.
  * [proposal-article] - Add component/tip for participants recognition
  * [db-api] - Deliver full name with participants population
  * [proposal-article] - Classes first.
  * [proposal-article] - Update plurals
  * [public] - Update build.
  * [proposal-options] - Update post-voting reload
  * [public] - Update build.
  * [public] - Update bootstrap to v2.3.2
  * [config] - Remove httpAuth in production mode.
  * [config] - Typo
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Update README.md for updates on install
  * Update install
  * corrected package.json details
  * [public] - Update build.
  * [proposal] - Remove missing undefined mocks
  * [proposal] - Add visionmedia/debug dep and log
  * [homepage] - Add visionmedia/debug to deps and log
  * Fix Style of component.json
  * [proposal-list] - Pin component/domify dep and update.
  * [proposal-options] - Pin component/domify dep and update.
  * [proposal-comments] - Pin component/domify dep and update.
  * [proposal-article] - Pin component/domify dep and update.
  * [public] - Update build.
  * Update 'script' > 'script.', 'style' > 'style.' from jade updates
  * Remove unused deps in package.json
  * [public] - Update build.
  * [homepage] - Update route for client app
  * [boot] - Delegate rendering to client app
  * [boot] - Proposal page from client side
  * [proposal] - Client app for proposal view
  * [homepage] - Spacing
  * [homepage] - Removed unnecesary deps
  * Pin passport deps in package.json
  * [db-api:proposal] - Apply changes with voting mongoose-plugin
  * [models:proposal] - Extend model with voting mongoose-plugin
  * Add mongoose-voting module to dependencies
  * Update package.json
  * [utils] - remove undefined arguments from basic http auth
  * [public] - Update build.
  * [homepage] - Update homepage with proposal-comments view
  * [proposal-comments] - Add view of comments for proposals
  * [models] - Index comments and retrieve getters configuration
  * [boot] - Remove delegated events
  * [proposal-options] - Delegate events.
  * [proposal] - Add GET comments route
  * [proposal-options] - Render chart from view
  * [public] - Update build.
  * [proposal-options] - Use of chart.js component to render results
  * [views] - remove of chart.js from layout
  * [boot] - removed chart.js chart from booting rendering
  * [public] - removed Chart.js dep from vendor
  * [proposal] - typos
  * [public] - Update build.
  * [proposal-options] - Add proposal options view component
  * [proposal-list] - Add proposal list view component
  * [proposal-article] - Add proposal article view component
  * [homepage] - Remove forgotten debuggers
  * [citizen] - Remove forgotten debuggers
  * [boot] - Expose jade as global. Homepage routes. Update timeago interval. NotFound route handler.
  * [homepage] - Update homepage component. Provide with homepage views.
  * [citizen] - Add citizen component
  * [citizen] - Restrict citizen routes.
  * [app] - Mount Citizen API service.
  * [citizen] - Add routes /citizen/all and /citizen/:id for Citizen API Service
  * [db-api] - Add citien's database api methods .all() and .get()
  * [proposal] - Add GET /proposal/all api route
  * [db-api] - fixing some spacing
  * [models] - Provide with virtual getters at .toJSON() and .toObject() calls
  * [build] - Provide jade templates support
  * [boot] - Update initial mocked data.
  * [public] - Update build.
  * [boot] - handle custom errors from responses with actions
  * [proposal] - restrict authorized-only actions on proposals
  * [utils:restrict] - handle unauthorized requests with redirections to authentication
  * [boot] - Prevent for undefined variables in view to break application
  * [public] - Update build.
  * [boot] - Handle optional vote change
  * [boot] - Comments to english
  * [boot] - hide options after vote
  * [boot] - Simple pie chart of results
  * [public] - Update build.
  * [boot] - Support voting on proposal
  * [proposal] - Add voting route
  * [db-api] - proposal: Support vote change
  * [db-api] - proposal: Removed missing 'console.log'
  * [boot] - Add superagent and dom dependencies
  * [views] - Fix url for submitting new proposals
  * [boot] - update comments with timeago. Fix url for submitting new comments
  * [public] - Update build.
  * [boot] - fixed typo
  * [boot] - Provide with timeago support
  * [component-variation] - temporary fix for backward compatibility
  * [public] - Update production build
  * [views] - Fixed layout assets wrong urls
  * [homepage] - Fix build error
  * [boot] - Provide with favicon for /favicon.ico route.
  * [boot] - Update dependencies
  * [makefile] - Fixed bug with components. Got confused with components/ folder
  * [boot] - Comments on functionality
  * [cleanup] - moving several styles to homepage
  * [cleanup] - removed repeated files
  * [cleanup] - Moving assets to boot/images
  * [cleanup] - more removal of old styles
  * [cleanup] - removed old styles
  * [cleanup] - more rearrange of public resources
  * [cleanup] - rearrange of libraries under public/
  * [cleanup] - removed jquery masonry dependency
  * [cleanup] - remove unnecessary layout_profile.jade
  * [component-variation] - first attempt
  * [proposal] - View, comments, participants, examples
  * Provide with examples when no data on db.
  * [component] - Dynamic build moved to development only.
  * [frontend] - First merge with backend
  * [proposal] - Submit proposal in html format, request handler
  * [component] - Git: ignored components folder
  * [component] - First building middleware
  * Proposal composer layout
  * Merge branch 'homepage' of github.com:DemocraciaEnRed/app into homepage
  * Merge branch 'development' into homepage
  * [models] - renamed 'census' to 'participants'
  * [db-api] - Proposal: vote once resource.
  * [App] - Added routes for Comment API Service
  * [db-api] - Comment: Fixed typo
  * [db-api] - Fixed typo.
  * [comment] - Routing: Add comment reply request handler
  * [proposal] - Routing: Added route for comment action
  * [db-api] - Proposal: Add comment action to proposal
  * [db-api] - Add comment to api interface
  * [db-api] - Comment: fixed typo.
  * [models] - Comment reply schema updated
  * [db-api] - Comment reply
  * new layout #4
  * [db-api] - Comment create and getFor proposal
  * new layout #4
  * new layout #4
  * [db-api] - Update proposal and tab apis
  * update routes reference
  * new layout #4
  * Updating models
  * new layout #4
  * Update db-api proposal and tag
  * new layout
  * [proposal] - module update
  * [db-api] - Proposal get by id
  * new layout
  * Proposal Module improved
  * tag module improved
  * Merge branch 'development' into homepage
  * [proposal] - Creation db interface and simple api
  * [Docs] - typo at tag db interface
  * [Logging] - Add debug module to proposal model
  * [Docs] - Document tag database interface
  * Fixed error on tag creation
  * new homepage layout
  * Tag Creation and search. Closes #9
  * Ensure Tag's uniqueness
  * Updates on Tag interface. Related to issue #9
  * Prepare for Component integration.
  * Tag API-DB integration. Related to issue #9
  * mailer updates
  * homepage updates
  * Registration module. Update auth module.
  * debugger for auth:strategy
  * update citizen schema
  * new regeps lib
  * Merge branch 'development' of github.com:DemocraciaEnRed/app into development
  * Update README.md
  * updating readme.md
  * updating readme.md
  * typo config.sample.json
  * ui fixes: box-homepage alignment
  * update README.md at NODE_PATH definition
  * libs path to '.' > Namespace for libs changes to 'lib/<moduleName>'
  * forgot absolute URL on redirect of auth...
  * fix config for heroku launch
  * Deleted unsused file
  * more homepage work
  * homepage work
  * added v1 app stylesheets. Closes #1
  * added avatar to profile
  * fixed ugly bug with facebook auth
  * Facebook Login
  * Update README.md with installing steps
  * First development steps
  * First Commit

0.19.0 / 2015-07-06
==================

 * Add Greek translation
 * Add Chinese (traditional) translation credit

0.18.0 / 2015-07-02
==================

 * add support for Chinese (Traditional) language
 * add gitter link on CONTRIBUTING.md
 * add new accented chars to regex, closes #941
 * add config setting to always show voting results. Closes #926

0.17.6 / 2015-06-16
===================

  * Update notifier-client version to 0.3.0
  * Fix homepage first law shown #898
  * Use config.headerFontColor on mobile menu icon #930
  * Add license in package.json
  * Use relative links in readme

0.17.5 / 2015-06-12
===================

  * Fix UI refresh on logout #921
  * Fix forgot password when VISIBILITY is 'hidden' #920
  * Add email normalization #689
  * Add ALLOW_EMAIL_ALIASES configuration #689
  * Add error handler for incorrect current password #714

0.17.4 / 2015-06-03
===================

  * Fixed bug that didn't ñet signup STAFF members #882
  * Remove DEPLOYMENT_DOMAIN config #873
  * Refresh token when is older than 1 day #874
  * Delete incompatible token cookies #871
  * Implemented httpOnly cookie option and a signout endpoint #846.
  * Added support for ':' character in URLs #834

0.17.3 / 2015-05-27
===================

  * Fix emebed videos on https #859
  * Normalize usage of avatar on user model #854
  * Fixed overflow on remove confirmation box #850
  * Default translations 'en' <- 'config.locale' <- 'user.locale' #828
  * Set user locale on signup Closes #828

0.17.2 / 2015-05-26
===================

  * Update DemocracyOS/side-comments version
  * Fix Law summary html filter #839
  * Set default value null for learnMoreUrl #837
  * Fix logout bug. Sometimes it just didnt work #811

0.17.1 / 2015-05-19
===================

  * Add headerContrast configuration #795
  * Dont remove stylings on law summary #810
  * Fix side comments #807 #759

0.17.0 / 2015-05-18
===================

  * Consolidate TLS/SSL configuration #822
  * Add fallback on missing translation keys with default locale #808
  * Add facebook login/signup form #815
  * Remove privatePort config key #788

0.16.2 / 2015-05-12
===================

  * Fix variable redefinition that causes app to crash in HTTPS mode #803

0.16.1 / 2015-05-12
===================

  * Fix users whitelist configuration #806

0.16.0 / 2015-05-08
===================

  * Improvements on spanish translations #767
  * Add Hungarian translations #793
  * Improvements on french translations #784
  * Now the user can change the app language from settings page #630
  * Improvements on Portuguese translations #779
  * Add App visivility configuration #741

0.15.0 / 2015-04-28
==================

  * Refactor app configuration #762
  * Remove bootstrap.js and dependencies #757
  * Add some parameterizable styles for header #730
  * Add users whitelist #722
  * Update store JWT in cookie at signin #735

0.14.0 / 2015-03-19
==================

 * Add quill support for video and image embedding over https
 * Update gravatar requests to go through https
 * Bump tj/debug version to 2.1.3 since it prevented built
 * Add external settings page. Closes #712

0.13.0 / 2015-03-17
===================

  * Add IP address as domains
  * Fix admin responsiveness. Closes #691
  * Fix buttons position. Closes #708

0.12.15 / 2015-03-16
====================

  * Fix domains in jwt. #706

0.12.14 / 2015-03-16
====================

  * Clear cookie after getting the domain in jwt. #706

0.12.13 / 2015-03-16
====================

  * Fix exporting top level subdomain for jwt. Closes #706

0.12.12 / 2015-03-15
====================

  * Add create tag link if no tags are found before creating any law. Closes #707

0.12.11 / 2015-03-15
====================

  * [jwt] - Update jwt component to look like hub's

0.12.10 / 2015-03-13
==================

 * Add reponsive logo for mobile #699
 * Add create my first topic button for staff members Closes #703
 * Fix new law button on admin
 * Fix new tag button on admin

0.12.9 / 2015-03-12
==================

 * Make '_target' attr conditional to 'homeLink' setting on header org link
 * Revert "Fix organization link to open on same tab"
 * Fix logo link on header Closes #701
 * Fix organization link to open on same tab
 * Merge branch 'release-0.12.8' into development

0.12.8 / 2015-03-11
==================

 * add deploymentId on feeds

0.12.7 / 2015-03-10
==================

 * update headerBackgroundColor to match hub's

0.12.6 / 2015-03-10
==================

 * update dockerfile description
 * expose client config on layout/index.jade for deployments where the config is part of the release and cannot be built
 * fix header user-badge height #699

0.12.5 / 2015-03-10
==================

 * fix usage of CORS_DOMAINS env variable

0.12.4 / 2015-03-10
===================

  * Fix corsDomains should be a string

0.12.3 / 2015-03-10
==================

 * update client config build logging

0.12.2 / 2015-03-10
==================

 * disable new topic notifications being true by default
 * update default favicon file path

0.12.1 / 2015-03-09
==================

 * externalize `db` module to democracyos-db repo
 * Add bug report template to `CONTRIBUTING.md`

0.12.0 / 2015-03-09
==================

 * make fallback PORT value equal to the one in sample.json
 * remove multicore option
 * fix usage of mongodb for replicasets
 * bump mongoose to 3.8.24
 * check if user found after decoding JWT token
 * fix typo in tag error handling function name

0.11.4 / 2015-03-08
===================

  * Add redirect to external signin and signup on backend
  * Fix calling next() no an error decoding jwt so it continues but without loading the user into the request

0.11.3 / 2015-03-07
===================

  * Remove 404 page to avoid problem on issue #690
  * Fix auth pages, saving a cookie supporting all subdomains if necessary (does not apply for localhost)

0.11.2 / 2015-03-07
===================

  * Fix signup and signin external urls

0.11.1 / 2015-03-06
===================

  * Send notification to notifier when a law is commented
  * Add notifier notification
  * Store jwt in cookies to work out between hub and DemocracyOS

0.11.0 / 2015-03-04
==================

 * Add hiding 'Read more' link text when topic has got only one paragraph contained in a single <div> element #438
 * Fix usage of mongodb connections to replica sets
 * Add checking for * CORS wildcard
 * Remove Dockerfile from .dockerignore
 * Update usage of mongodb by adding the db module
 * Add CORS support. CORS_DOMAINS env variables holds a whitelist of domains
 * Fix bad legacy text rendering #438
 * Hide clauses Add button for new laws and laws that have not clauses #675
 * Merge branch 'add/quilljs' into update/admin
 * Fix bad rendering on clauses with manually entered HTML #438
 * Fix responsive wrapping in clauses #438
 * Embed video responsively #438
 * Add video tooltip #438
 * Add Bullet button to toolbar #438
 * Fix side-commented empty lines #438
 * Add richtext editor for editing `law`s #438

0.10.14 / 2015-02-26
====================

  * Add missing translations Closes #671
  * Add instanceUrl and law.id to data sent to notifier #673
  * Add debugging configurations Closes #653
  * Add debug on Procfile and move running instructions to postinstall script on package.json file #465
  * Add unknown closing date translation Closes #655
  * Add missing keys Close #476
  * Add initial docker-related files
  * Add translation lib #643
  * Add in-app editing of side comments
  * Fix no comments msg when comment deleted Closes #662
  * Fix some portuguese translations
  * Fix combo filer visibility Closes #553
  * Fix build to process.exit(1) on error during build #465
  * Fix re-load of user when already logged Closes #652 #376
  * Fix bin file permissions #643
  * Fix error after login Closes #376
  * Fix login, use response data, dont fetch again user #376
  * Remove useless keys on en language #476
  * Remove unnecesary setting DEBUG on Procfile #465
  * Refactor citizen.optional middleware #376
  * Refactor db-api user public interface

0.10.13 / 2015-02-15
==================

 * Update all translations for full i18n support.

0.10.12 / 2015-02-15
==================

 * Update Dutch translation (thanks @Dandandan).

0.10.11 / 2015-02-14
==================

 * Add link to admin panel on dropdown. Closes #635
 * Minor tweaks for Ukrainian and Russian translations

0.10.10 / 2015-02-13
====================

  * Add translitarate when normalizing. Closes #642

0.10.9 / 2015-02-11
==================

 * Fix jump when scrolling headroom. Closes #637
 * Fix saving a `law` with no `tag` on it. Closes #624

0.10.8 / 2015-02-10
===================

  * Fix `timeago` interval to be 1s #631

0.10.7 / 2015-02-10
===================

  * Remove bus emitting events to call timeago.update(). Update timeago update interval #631
  * Bump DemocracyOS/side-comments version to 0.0.13 #631
  * Fix hour formatting in law admin. Closes #625
  * Fix duplicate entry in changelog

0.10.6 / 2015-02-07
==================

 * Fix error when clicking on show replies when not logged in. Fixes #632
 * Fix usage of COMMENTS_PER_PAGE in env.js so 0 is always default
 * Fixed paging limit in side-comments. Closes #623
 * Don't allow validated users to request resend validation email. Closes #604
 * Fixed separation between commenter and timestamp. Closes #620
 * When posting a new comment, timestamp shows immediately Closes #619
 * Remove setting timeago.interval since default is good enough (30 secs)
 * Add wrapper for multiple local-storage options. Closes #582
 * Make multiple CPU core usage optional via config. Closes #611

0.10.5 / 2015-02-05
==================

 * Update contributor acknowledgements
 * Bump version of DemocracyOS/side-comments. Fixes #615
 * Set timeago update interval to 30 secs (default) #615
 * Changed express.get by config to get token secret. Closes #613

0.10.4 / 2015-02-01
==================

 * Fix handling of errors on formview. Fixes #610
 * Make 'new-topic' notifications true by default

0.10.3 / 2015-01-31
==================

 * Fix Display side-comments button only on paragraph mouse-over for paragraphs with no comments. Closes #606
 * Fix tag icons go glitchy when tag names are shorter than 3 characters. Closes #607

0.10.2 / 2015-01-30
==================

 * Add swedish translation and credits
 * Changed 'forgot password' error description #602
 * Redirect to Resend validation token page if nonvalidated email is submitted. Closes #602.
 * Forgot password form xplanation now hides when form is submitted. Closes #594.
 * 'You must login' message placed over voting buttons. Closes #592.
 * Fixed signin after signup token validation. Closes #595.
 * Put 'signin required' message over argument on up/downvoting. Closes #593.
 * Fixed settings responsive styles. Closes #591
 * Move demo link above the image in README.md
 * Add Russian translation credits

0.10.1 / 2015-01-25
==================

 * Add Russian language

0.10.0 / 2015-01-25
==================

 * Update configuration defaults mechanism
 * Bump 'merge-util' server-side dep to version 0.3.1 and fix handling of config merge in env.js
 * Fix usage of config setting for external signin/signup URLs
 * Update CONTRIBUTORS.md
 * Bump 'merge-util' server-side dep to version 0.3.1 and fix handling of config merge in env.js
 * Fix usage of config setting for external signin/signup URLs
 * Support SSL via configuration. Closes #98 #587
 * Fixed race condition. Related to #98.
 * Add bin/dos-ssl script for self-signed SSL certificates #98.
 * Scroll and focus on textarea when clicking on New Argument button. Closes #555.
 * Added restrict middleware to update and delete operations #282 #580
 * Fixed misuse of dom.addClass method. Closes #580.
 * Rebase from development
 * Implemented JSON Web Tokens (JWT) authentication middleware #578
 * Added config parameter to disable signin/signup. Closes #573.
 * Add Galician translation
 * Add Ukrainian translation
 * Rename MongoDB collection citizens to users
 * Rename db-api/citizen.js to user.js
 * Use mongoUsersUrl or fallback to mongoUrl if the key doesn't exists in the config #559
 * Remove user-model module and export User model in lib/models #559
 * Update comments' and replies' author to get populated by the User model #559
 * Deprecated MONGO_HQ env var name in favor of MONGO_URL. Addendum to #525
 * Fix code to meet conventions
 * Fix read more participants. Closes #565
 * Add mongoUsersUrl to env config file #559
 * Add missing translations for #560 #478
 * Basic wrapper for notifier-client #560
 * Merge branch 'update/notifier-no-data-deps' into development
 * Update payload for 'law-published' notification. Closes #561
 * Added Gitter badge to README.md
 * Update error handling on response override to match refactored approach in FormView
 * Update re-send validation email view. Closes #478
 * Updates law filter model without fetch from server. Related to #460.
 * Changed the way voting badge is added to the sidebar. Closes #460.
 * CSS to Stylus where missing #215.
 * Replace vote up/down on comment card by comment-vote. Closes #471
 * Expose unvote calls  #471
 * Introduce comment vote view.  #471
 * Refactored several views to extend from View and FormView #282
 * Fixed onvote event binding. Closes #406.

0.9.0a / 2015-01-16
==================

 * Fix side-comments. Fixes #572

0.9.0 / 2015-01-06
==================

 * Fix faulty error handling in forgotpassword and signup with notifier. Closes #549
 * Remove unneeded entries from component.json
 * Fix autosubmit and FormView error handling
 * Made usage of notifier mandatory for mailing users.
 * Fix edit comment form buttons styles #529
 * Reply submit button not properly aligned #495
 * Remove mandrill and mailer dependencies
 * Refactor homepage to use a middelware instead of an if-check clause. Update dependencies #282
 * Switch local dep markdown to DemocracyOS/marked for #527
 * Update dom dependecy to avoid error of chained messages with .html() #282
 * Remove unused markdown local module. Closes #329
 * change local markdown dependecy by remote dependency #329
 * Bumped component-builder version to 1.2.0. Related to #475.
 * Fixed array length check throwing error with new version of dom. Related to #475.
 * Changed merge-util argument type on calling. Closes #475.
 * Remove deprecated comments-view component #282
 * Remove unused markdown local module. Closes #329
 * Improve styles and content for update browser page. Add links for donwload browsers. #168
 * Decreased separation between commenter's name and timestamp.
 * Hide header on scroll if app is rendered in mobile device. Closes #452.
 * Add middleware to handle unsupported browsers. Add module for unsupported browsers. #168
 * Fix #516: Upvote comment button underlines on hover
 * Fix #515: User name and timestamp overlap on replies
 * Add comment to current user's comments after successful submit #282
 * Improved pluralization. Related to #406.
 * Update participants counter and balloons after voting. Closes #406.
 * Update citizen model. Made reply notifications true by default
 * Voting made async and UI blocks when user clicks on voting buttons. Closes #394.
 * Add mail notifications when a law is published for users that are subscribed to it. Closes #473
 * Add setting for new-topic notification
 * Add delivering notifications to client
 * Add notifications attribute to citizen model
 * Add notifying when someone replies to an argument
 * Add notifier integration for forgot-password
 * Update sample config with notifier requirements
 * Add missing translations for settings in every language
 * Enable settings-notifications view #28
 * Add UI toggle component styled for DemocracyOS
 * Remove control logs. Actually closes #26
 * Make notifier usage dependent on configuration settings
 * Make signup email validations rely on notifier-client

0.8.26 / 2014-12-11
==================

 * Fix label logic for admin list law. Completes #504 and closes #472
 * User thumbnail is not aligned with user name. Closes #503
 * Remove jQuery scrolling to top after successful submit #458
 * On creating a law, routes to the page for the new law. Closes #421
 * Removed unique constraint for lawId. Closes #472.
 * Remove legacy unbinding code fixed updated by #501 for #497
 * Add restrict middleware to vote endpoint. Closes #490.
 * Update checking for switchOn and switchOff being typeof function #500
 * Author name supports apostrophes ('), hyphens (-) and dots (.). Closes #493.
 * Update view to support unbindAll when element is removed, detaching DOM events and Emitter event handlers. Closes #500
 * Update proposal-options to inherit from View #282
 * Update ProposalArticle to inherit from View #282
 * Fix reply submit button not properly aligned. Closes #495.
 * #484 Remove unnecesary colon and semicolon from .styl file
 * fix reply rendering after submittin. Closes #491
 * Separate participants-box into two separate components: one for holding the box and another one for each participant bubble #282
 * Remove unnecesary 'render' dependency
 * Merge pull request #488 from DemocracyOS/revert-487-394-votes-count
 * Remove unnecesary 'assert' library. Rename onremove method to _onremove to not collision with the FormView onremove method.
 * #484 Fix rule
 * #484 Fix h-scrolls on mobile settings. - migrate settings from css to stylus (related to  #215) - Fix media queryes.
 * #224 - Restrict first name length on user drop down text
 * Fixed mongoose sessions error. Closes #439.
 * Update CONTRIBUTING.md
 * New API method for getting the version info. Closes #444
 * Merge pull request #455 from bigokro/fix/proceed-in-english
 * Minor spelling corrections in English (procced --> proceed)
 * Fixed function declarations on Issue #430
 * Fix tag duplication on law creation. Closes #430.
 * Fixed weird behavior when deleting arguments as admin
 * Fix regex for URL validation. Closes #451

0.8.25 / 2014-11-07
==================

 * Add preventing disabled accounts to sign in

0.8.24 / 2014-10-22
==================

 * Fix dep ref back to upstream
 * Revert "Update ref to a breaking dep"
 * Revert "Update all dep refs from 'visionmedia' to 'tj' #456"

0.8.23 / 2014-10-21
==================

 * Update ref to a breaking dep

0.8.22 / 2014-10-21
==================
 * Update all dep refs from 'visionmedia' to 'tj' #456
 * Update dep for DemocracyOS/side-comments
 * Update refs for component/t
 * Pin deps for component/emitter

0.8.21 / 2014-10-21
==================

 * Fix fixtures use and add acknowledgements to README.md

0.8.20 / 2014-10-20
==================

 * Fix fetching own comments from mongodb

0.8.19 / 2014-10-15
==================

 * Fix layout and style of reply buttons. Closes #407

0.8.18 / 2014-10-09
==================

 * Fix comments not showing up on any law
 * Fix 'No citizen has argumented on this law yet' message

0.8.17 / 2014-10-08
==================

 * fix admin able to delete side-comments of all users. Closes #448
 * Fix avatar usage in side-comments. Closes #447

0.8.16 / 2014-10-08
==================

 * Fix summary html rendering
 * Complete catalan translation
 * Add side-comments for summary paragraphs. Closes #33
 * Fix sorting by 'Closing soon'. Close #442
 * removes spanish error message (changed to english) - PR #442
 * Update DemocracyOS/side-comments dep version. Close #436

0.8.15 / 2014-10-08
==================

 * Add deleting comments as a staff member

0.8.14 / 2014-10-07
==================

 * Bump sidebar-comments dep version to 0.0.9 and stylize them

0.8.13 / 2014-10-07
==================

 * Bump DemocracyOS/side-comments dep version

0.8.12 / 2014-10-07
==================

 * Fix side-comments avatar usage. Closes #447

0.8.11 / 2014-10-07
==================

 * Partially undo last fix

0.8.10 / 2014-10-07
==================

 * Fix filter box styles

0.8.9 / 2014-10-07
==================

 * [side-comments] - Fix side-comments dep

0.8.8 / 2014-10-06
==================

 * Pin mongoose version to 3.8.16

0.8.7 / 2014-10-06
==================

 * Bump component-resolver dep version

0.8.6 / 2014-10-02
==================

 * Update timeago dep

0.8.5 / 2014-09-30
==================

 * Fix rendering clauses when only 1 clause is present. Closes #440

0.8.4 / 2014-09-29
==================

 * Fix null citizen on lookup

0.8.3 / 2014-09-22
==================

 * Add author field to law #428
 * Add ToS and PP accept on signup #405
 * Remove 'Bill' prefix from title and remove required lawId #424
 * Fix refresh signin when there are no laws #434
 * Fix typo on 'Read more'

0.8.2 / 2014-09-19
==================

 * Add portuguese locale
 * Add missing key from `en.json`

0.8.1 / 2014-09-18
==================

 * Fix Makefile building the app as well as post-install script
 * Update dependencies for closest non-deprecated version. Closes #431
 * Fix translations

0.8.0 / 2014-09-16
==================

 * Add citizen profile picture as a URL
 * Add external links to a law
 * Add custom text to truncate law clauses
 * Add unvotable laws
 * Remove 'source' as a required law attribute

0.7.6c / 2014-09-11
==================

 * Fix create law

0.7.6b / 2014-09-05
==================

 * [sidebar] - Fix path to check.png image

0.7.6 / 2014-09-05
==================

 * Add navigate back to /law/:id after succesful signin. Closes #369
 * Update node version to 0.10.28
 * Update npm version to 1.4.9
 * Update to Component(1)
 * Fix English translations
 * Fix signin tabindex

0.7.5 / 2014-08-26
==================

 * Fix spanish translations
 * Add menu items for `faq`, `tos`, `pp` and `glossary`, conditional to settings. Closes #412
 * Add denying user to up/downvote comments if they are not signed in. Closes #403
 * Add translations for 'You must be signed in to up/downvote arguments' #403

0.7.4 / 2014-08-14
==================

 * Add Dutch translations
 * Add German translations
 * Add View and FormView base js classes for all view to extend them and not repeat the same logic through all the app
 * Add Stateful and StatefulView components to handle view states
 * Add autosubmit and autovalidate for forms
 * Add SideComments, but comment it out
 * Add CONTRIBUTORS file
 * Add MIT License text
 * Update README.md
 * Remove trailing whitespaces
 * Fix environment variables for FAQ, Terms of Service, Privacy Policy and Glossary enabling
 * Fix email validation flow to redirect to the topic the user was reading before signup
 * Fix 'Guest' displayed to logged in user as their fullname
 * Fix SignUp bug on Firefox

0.7.3 / 2014-07-12
==================

 * Fix not showing page content once page changes having no laws. Closes #385

0.7.2 / 2014-06-23
==================

 * Add 'for' attribute on 'hide-voted' label
 * Add app stats for admin users #377
 * Add `#content` lock until page is rendered #183
 * Add setting `emailValidated` to true when signup in 'development' environment. Closes #374
 * Add optional text-centered law clauses from the admin #197
 * Add disclaimer when sidebar has no law to select #355
 * Add strip package. Closes #334
 * Add README.md stub
 * Add glossary #371
 * Add layout as a separate module #86
 * Update default logo and favicon URL in config
 * Update `clauseId` to be non-required `clauseName` #304
 * Update `sidebar` to hide 'closing-soon' filter when seeing only closed laws #368
 * Update  with link for Christian Martínez
 * Update voting to prevent reloading the page. Closes #367
 * Update 'discore/closest' to 'component/closest'
 * Fix counter label when there are +99 open/closed laws
 * Fix anchor colors to be consistent all the way across the app. #375
 * Fix typo on snapper destroy
 * Fix participants to be ordered by voted date #339
 * Fix `read more` links on comments #361
 * Fix law articles bold color links #354
 * Fix zoom on mobile (make it un-zoomable) #364
 * Fix dropdown on all browsers
 * Fix header race condition #325
 * Fix facebook and twitter cards, escaping HTML characters
 * Fix open and closed count as they were counting drafts if you were signed in as admin. Closes #342

0.7.1 / 2014-05-30
==================

 * Remove 404 not found page

0.7.0 / 2014-05-29
==================

 * Add 404 not found page
 * Add support for FAQ, Terms of Service and Privacy Policy pages
 * Add 'My argument' section
 * Add disable up/downvoting own comments
 * Add sorting comments
 * Add an 'edited' label next to a comment when it was edited
 * Add spinner for loading comments
 * Update proposal-article to auto-scale iframes (i.e.: youtube embedded videos)
 * Fix timepicker in the law admin
 * Fix logout bug
 * Fix sidebar voted laws bug #336
 * Fix proposal-article image size on mobile
 * Fix transportation tag image issue
 * See migrating to 0.7.x

0.6.7 / 2014-05-16
==================

 * Comments are marked as spam when they exceed a config parameter or, if not set, when they have more spam reports than score (upvotes minus downvotes)

0.6.6 / 2014-05-14
==================

 * Fix cannot set 'transport' image to a tag. Closes #347

0.6.5 / 2014-05-13
==================

 * Fix embedded image in proposal size to match the proposal's width

0.6.4 / 2014-05-13
==================

 * Remove unneeded remotes from root `component.json`

0.6.3 / 2014-05-12
==================

 * Fix build failure based on remotes. Change remotes order.

0.6.2 / 2014-05-09
==================

 * Fix comments paging and sorting

0.6.1 / 2014-05-09
==================

 * Fix several translation errors

0.6.0 / 2014-05-07
==================
 * Add 'fi' locale (Finnish)
 * Add deleting and editing own arguments
 * Add replying to an argument
 * Add markdown'd arguments
 * Add markdown explanation page
 * Add locale config parameter
 * Add comments paging
 * Fix component issue
 * Fix some UI issues
 * Fix npm packages dependencies, changing ^ for ~

0.4.12 / 2014-04-25
==================

 * Fix build failure based on remotes and outdated component version

0.4.11 / 2014-04-14
==================

 * Fix 'voted' check after sign-in. Fixes #326

0.4.10 / 2014-04-03
==================

 * Refresh sidebar after casting vote
 * Fix not showing form errors on FF
 * CSRF protection

0.4.9 / 2014-03-31
==================

 * Remove requirement of feedback. Closes #303
 * Update translations
 * Update `README.md` with current deployments.
 * Remove references to Partido de la Red.
 * Update article template and config so alert is optional.
 * Update default fixtures
 * Change default locale to 'en'
 * Update headerBackgroundColor
 * Add list alphabetically sorting. Closes #299
 * Merge pull request #302 from Magui1984/development
 * Create fr.json
 * Add timepicker for closingAt law attribute. Closes #300
 * Add styles to override bootstrap default css that was making datepicker popover invisible #300
 * Add datepicker control and clear button
 * Add field for closingAt date #300
 * Add component/datepicker dependency
 * Add translations for  #300
 * Bump slifszyc/paragraphs to 0.2.0 version
 * Update application configuration by adding `dos-config` command. #234
 * Merge pull request #297 from rodowi/storage-quota-fix
 * Overcomes local storage quota
 * Fix update for #293
 * Fix suscribe ListView to LawsFilter items `reload` event instead of `change`
 * Remove refetch on citizen loaded. Fixes #293
 * Fix overflowed selected filter in Firefox. Closes #270
 * Fix law min-height for voted badge. Closes #294
 * Update `sample.json`

0.4.8 / 2014-03-31
==================

 * Add published laws RSS feed

0.4.7 / 2014-03-20
==================

 * Add `closingAt` law attribute on admin

0.4.6 / 2014-03-18
==================

 * Fix comments at law view rendering bumping slifszyc/paragraphs to 0.2.0 version

0.4.5 / 2014-03-13
==================

 * Fix unescaped comments at law view

0.4.4 / 2014-03-10
==================

 * Fix firefox bug on function scopes at `laws-filter`

0.4.3 / 2014-03-06
==================

 * Move `homepage` centrilized styles to each component and `boot`
 * Deprecate `main.css`
 * Fix missing `var(spacing)`
 * Add `styl` compiler at `build` and normalize `main.styl` at `homepage` to match `styl` instead of `stylus`

0.4.2 / 2014-03-03
==================

 * Refactor `settings` and `admin` sections
 * Add `publishedAt` to several `law`s in `lib/fixtures`. Closes #289
 * Add missing keys to `ca.json` locale translation file. Requires translation
 * Added Catalonian translation file

0.4.1 / 2014-02-28
==================

 * Fix feedback initialization with new header. Fixes #290
 * Update citizen middlewares for client. Improve login/logout
 * Fix unexpected bug on filtering voted laws
 * Fix snapper with new header

0.4.0 / 2014-02-28
==================

 * Fix to re-fetch laws after login
 * Fix  sort in `sorts` to use `publishedAt` field instead of `createdAt`. Closes #287
 * Change state to loading while fetching tags
 * Refetch laws after save/delete law from `admin` pages
 * Change state to loading while fetching laws
 * Re-fetch laws after save/remove from `admin` pages
 * Updated staff client middleware. Closes #286
 * Add public/private status update and delete law with confirmation. Closes #242 #280
 * Add `publish`, `unpublish` and `delete` API endpoints. #242
 * Update queries to only display undeleted laws
 * Bump bootstrap to 3.1.1
 * Fix site reload on login. Closes #283
 * Update endpoint to serve only public laws unless user is staff
 * Add `publishedAt` and `deletedAt` fields. Remove unused `deleted` field
 * Update images to global international naming
 * Update tag image url source from `tag-images` collection
 * Add `tagImages` as a global var for templates
 * Remove moved tag images from component.json
 * Update form to allow image selection for tags. Closes #278
 * Update force tags section as part of `List` at sidebar
 * Add image key of tag for laws all population
 * Provide image key from tag API endpoint #278
 * Add image key to model tag #278
 * Refactor collection of `tag` images as a module
 * Fix sidebar not being sensitive to citizen logout. Closes #274
 * Add translations for admin sections. Closes #281 #279 #277 #276 #275
 * Add force list section on sidebar for law edit view
 * Add summary field to form and fix tabindex and options selected query
 * Add common styles for admin sections
 * Update `README.md` with team categories
 * Add confirmation dialog styles
 * Update pre-delete clause modal message and dont focus on cancel
 * Add basic confirmation alert before deleting a clause
 * Update styles for list view for admin lists
 * Refactor logout to use a middleware. Closes #273
 * Add redirect to `/signin` after logout #273
 * Refactor logout to use new `logout` component #273
 * Add `logout` component #273
 * Update list view. Add remove clause method and mechanics.
 * Add remove clause endpoint
 * Update method .update to properly update 1 by 1 law clauses with new content
 * Parse clauses input names before sending on POST request
 * Refactor header into independent component. Closes #265
 * Add simple clauses creation mechanics
 * Add clause API endpoint method to create/update law clauses
 * Update `CONTRIBUTING.md` with contribution workflow. Thanks @maraoz!
 * Add unescaped summary to display law with line breaks. Closes #196
 * Add form disabling when posting signin data. Closes #199
 * Remove normalize module dependencies from tag model. Closes #264
 * Add tag hash normalization when creating a new tag. For existing tags, hash should not be changed as it is used to fetch their image #264
 * Add normalize function to utils and rename old normalize function to sanitaze #264
 * Remove deprecated functions #264
 * Add utils to tag model #264
 * Add create and edit tag server side endpoints #264
 * Add tag create and edit client endpoints
 * Add form-view and template to edit/create a tag #264
 * Add tags admin to list existing tags #264
 * Add tags list rendering inside content #264
 * Add tag list and create options #264
 * Add new method `.update(id, data, fn)` to `db-api` for `law`
 * Add restrict and staff middlewares for /law/:id POST endpoint
 * Add /law/create and /law/:id POST endpoints for admin law edition
 * Add /tag/all endpoint
 * Add self binding for middleware usage
 * Update middleware build check
 * Update sections with placeholder for new sections format. #240
 * Update client routing to match chained sections of admin pages. #240
 * Add `staff` config key from environment. Closes #241
 * Add staff middleware check for `/law/create`. #241
 * Add `isStaff` middleware check #241
 * Add `staff` virtual property to model `citizen` #241
 * Add `staff` prop to sample.json. #241
 * Add administration module

0.3.4 / 2014-02-24
==================

 * Fix component build process - exit on error
 * Fix use `package.json` version for bin/dos

0.3.3 / 2014-02-24
==================

 * Fix handling of component build errors

0.3.2 / 2014-02-13
==================

 * Refactor i18n for 'comments' to 'arguments'. Closes #263

0.3.1 / 2014-02-13
==================

 * Fix click on home logo. Closes #262

0.3.0 / 2014-02-13
==================

 * Refactor `laws-filter` for `sidebar` #219
 * Add check to voted laws in sidebar list. Closes #226
 * Fix some typos reported by users
 * Fix i18n for 'or' in 'login required' messages
 * Add count numbers to status filters. Closes #238
 * Update 'Hide voted' translation
 * Add i18n for release #255
 * Fix styles for release #255
 * Rename `sidebar-list` to `sidebar` and inner component files
 * Add styles for #220 and #218
 * Add hide-voted checkbox functionality to filter view. Closes #220
 * Add warning for no IE 9- support
 * Finish open/closed filter for #220
 * Fix typo on a translation message
 * Fix input fields tabindex attribute
 * Add translations to link to signup from /signin page. Closes #248
 * Add link to signup #248
 * Add `firstName` and `lastName` translations and remove the ones for `fullName`
 * Refactor `fullname` into two separate fields (`firstName` and `lastName`)
 * Refactor `sidebar-view` into subviews `list-container` and `filter-container`
 * Rename `list-block.jade` to `sidebar.jade`
 * Add store server support routes to `boot`
 * Add new local storage component `store`
 * Add styles file for #218 and #220
 * Fix translation key
 * Add use of new `laws` local component for `siderbar-list`
 * Add new `laws` collection component
 * Fix translations for #218 and #220
 * Add basic UI (no styles) for #218 and #220
 * Add toggle button group for #218 and #220

0.2.9 / 2014-01-30
==================

 * Add support for inheritance locals merge at render

0.2.8 / 2014-01-30
==================

 * Bump merge-util version

0.2.7 / 2014-01-30
==================

 * Remove json build script forgotten require

0.2.6 / 2014-01-30
==================

 * Improve `build` logging
 * Remove deprecated `json.js` builder plugin
 * Improve `jade` build script
 * Add toggle/hide signin/signup links on header. Closes #136
 * Add logs using `utils.pluck` helper method.

0.2.5 / 2014-01-28
==================

 * Restore participants ids on law article view

0.2.4 / 2014-01-28
==================

 * Apply exposure function to filter content delivered to client by API endpoints
 * Fix random bug on responses without body for `comments-view`
 * Rename `utils.map` to `utils.expose`
 * Deprecate `utils.merge` in favor of `merge-util`

0.2.3 / 2014-01-28
==================

 * Fix dependency override of `component/delegate` by `component/tip`. Closes #233

0.2.2 / 2014-01-27
==================

 * Bump `component/events` to 1.0.5

0.2.1 / 2014-01-27
==================

 * Update `utils.restrict` function middleware
 * Remove `/citizen/all` API endpoint. Closes #236
 * Add reject no `application/json` requests from `delegation`, `comment`, `tag`, `proposal`, `law`, `citizen` API endpoints. Closes #237
 * Add `accepts` new module
 * Remove path '/auth/facebook' from page's routes at `boot`
 * Fix error on vote click while unlogged
 * Update to component/events@f445d
 * Pin all component dependencies. Closes #231
 * Bump `component-builder` and `component`
 * Update `config` logs and avoid exposing configuration settings to output
 * Update Makefile
 * Update dependency 't-component' to 1.0.0

0.2.0 / 2014-01-10
==================

 * Fix upvote/downvote comments at `law` article view
 * Remove `border` styles from header's user nav dropdown
 * Fix profile name input validations and rules. Fixes #221
 * Bump mongoose-gravatar to 0.2.1
 * Add default values for gravatar at `citizen`
 * Bump mongoose-gravatar to 0.2.0
 * Profile uses citizen.gravatar instead of .avatar
 * Disable changing email via `settings-profile`. Fixes #223
 * Add missing translations at `settings` page. Closes #214
 * Fix style for active selection in `settings` nav-bar. Closes #201
 * Update translations for `settings` page. Closes #202
 * Add a map of JSON response at `citizen` API endpoint
 * Add a map of values for delivered API documents at `law` API endpoint
 * Update all uses of old `citizen.avatar` to use new `citizen.gravatar`
 * Add `mongoose-gravatar` for `citizen` model to handle dynamically gravatar.com urls
 * Add `pluck`, `map`, `get` and `normalize` at `utils`
 * Remove all tokens of same scope when creating new one at `db-api:token`
 * Add log on error if citizen not found by email and return false at `db-api:citizen`
 * Add link to change avatar at `settings` page. Close #201
 * Update `settings` page's render handle to improve performance
 * Update `settings` page styles and elements
 * Update dependencies and pin versions at `package.json`
 * Add config module to retrieve `mongoUrl` in all modules requiring it
 * Remove `express.router` from `setup`
 * Remove unnecesary application settings at `setup`
 * Move all API modules to `boot` instead of `index.js` for coherent application booting
 * Update code style in some modules to embrace our own standard. Needs more work
 * Update application config settings load. Moved to new `setup` module
 * Update `laws.json` fixtures
 * Fix bug with scroll at section `#content`
 * Update settings page to handle separately `profile` and `password` edits

0.1.1 / 2013-12-31
==================

 * Pin deps to avoid installation crashes

0.1.0 / 2013-11-21
==================

 * Add basic account information update form.
 * Add law time scope and results after close.
 * Add basic commands like: `fixture load`, `db-dump`, and more...
 * Add I18n for client and server.
 * Add IE8 basic support.
 * Add support via UserVoice.
 * Add tag filtering.
 * Add flag as spam for comments.
 * Add upvoting/Downvoting comments.
 * Add comments for laws.
 * Add voting for laws.
 * Add social sharing for Twitter, Facebook and Google+.
 * Add responsive design.
 * Add password reset.
 * Add account email confirmation.
 * Add local Signin/Signup.
 * Add basic application layout.
