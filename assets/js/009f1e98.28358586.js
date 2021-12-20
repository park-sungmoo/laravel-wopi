"use strict";(self.webpackChunklaravel_wopi_docs=self.webpackChunklaravel_wopi_docs||[]).push([[436],{2783:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],l={id:"configuration",title:"Configuration",sidebar_position:2},s=void 0,p={unversionedId:"getting-started/configuration",id:"getting-started/configuration",isDocsHomePage:!1,title:"Configuration",description:"Open configuration file - config/wopi.php",source:"@site/docs/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/laravel-wopi/docs/getting-started/configuration",editUrl:"https://github.com/nagi1/laravel-wopi/docs/getting-started/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"configuration",title:"Configuration",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/laravel-wopi/docs/getting-started/installation"},next:{title:"Document Manager",permalink:"/laravel-wopi/docs/getting-started/document-manager"}},u=[{value:"Available options",id:"available-options",children:[],level:2},{value:"Dynamic configuration",id:"dynamic-configuration",children:[],level:2},{value:"Note on swiping implementations",id:"note-on-swiping-implementations",children:[],level:2}],c={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Open configuration file - ",(0,o.kt)("inlineCode",{parentName:"p"},"config/wopi.php")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set the ",(0,o.kt)("inlineCode",{parentName:"li"},"document_manager")," with your ",(0,o.kt)("a",{parentName:"li",href:"#"},"Document Manager"),"."),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"WOPI_CLIENT_URL")," Env."),(0,o.kt)("li",{parentName:"ul"},"Enable needed features.")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Be sure to set your ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware")," to restrict access to the application."))),(0,o.kt)("h2",{id:"available-options"},"Available options"),(0,o.kt)("p",null,"Read the comments above every option"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config/wopi.php"',title:'"config/wopi.php"'},"return [\n     /*\n     * Managing documents differs a lot between apps, because of this reason\n     * this configration left empty to be implemented by the user There's\n     * plans to implement example storage manager in the future though.\n     */\n    'document_manager' =>  null,\n\n    /*\n     * Here, you can customize how would you like to retrive\n     * all of the diffrent configration options.\n     */\n    'config_repository' => Nagi\\LaravelWopi\\Services\\DefaultConfigRepository::class,\n\n    /*\n     * This package comes with a convenient implementation of the\n     * wopi spec you can build your own and swap it form here.\n     */\n    'wopi_implementation' => Nagi\\LaravelWopi\\LaravelWopi::class,\n\n    /*\n     * This request get injected into every request, and currently does\n     * not have any validation logic. It's a great place to implement\n     * custom validation for the access_token and access_token_ttl.\n     */\n    'wopi_request' =>  Nagi\\LaravelWopi\\Http\\Requests\\WopiRequest::class,\n\n    /*\n     * Here's you can define your middleware pipeline that every\n     * request from the wopi client will go through.\n     */\n    'middleware' => [Nagi\\LaravelWopi\\Http\\Middleware\\ValidateProof::class],\n\n     /*\n     * Collabora or Microsoft Office 365 or any WOPI client url.\n     */\n    'client_url' => env('WOPI_CLIENT_URL', ''),\n\n    /*\n     * Tells the WOPI client when an access token expires, represented as\n     * a timestamp. It's not a duration rather than a date of expiry.\n     */\n    'access_token_ttl' => env('WOPI_ACCESS_TOKEN_TTL', 0),\n\n    /*\n     * Every request will be approved using RSA keys.\n     * It's not recommended to disable it.\n     */\n    'enable_proof_validation' => true,\n\n    /*\n     * Enable/disable support for deleting documents.\n     * @default false\n     */\n    'support_delete' => false,\n\n    /*\n     * Enable/disable support for renaming documents.\n     * @default false\n     */\n    'support_rename' => false,\n\n    /*\n     * Enable/disable support for updating documents.\n     * @default true\n     */\n    'support_update' => true,\n\n    /*\n     * Enable/disable support locking functionality,\n     * thought you have to implement lock functions.\n     *\n     * @default false\n     */\n    'support_locks' => false,\n\n    /*\n     * Enable/disable support for GetLock operation.\n     *\n     * @default false\n     */\n    'support_get_locks' => false,\n\n    /*\n     * Enable/disable support for lock IDs up to 1024 ASCII characters\n     * long. If disabled WOPI clients will assume that lock IDs\n     * are limited to 256 ASCII characters.\n     *\n     * @default false\n     */\n    'support_extended_lock_length' => false,\n\n    /*\n     * Enable/disable support for storing basic information\n     * about the user and enable PutUserInfo operation.\n     *\n     * @default false\n     */\n    'support_user_info' => false,\n\n];\n")),(0,o.kt)("h2",{id:"dynamic-configuration"},"Dynamic configuration"),(0,o.kt)("p",null,"You can create your own configuration, for example for different enable/disable features based on abilities."),(0,o.kt)("p",null,"Create new class that implements ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigRepositoryInterface"),", for example - ",(0,o.kt)("inlineCode",{parentName:"p"},"TestConfigRepository")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Http\\Services;\n\nuse Nagi\\LaravelWopi\\Contracts\\ConfigRepositoryInterface;\n\nclass TestConfigRepository implements ConfigRepositoryInterface\n{\n    // ... implement all methods from interface\n\n    public function supportDelete(): bool\n    {\n        if (\\Auth::user()->can('delete-document')) {\n            return true;\n        }\n\n        return false;\n    }\n\n    ...\n}\n")),(0,o.kt)("p",null,"Or customize how would you like to get ",(0,o.kt)("inlineCode",{parentName:"p"},"discovery.xml")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'\n    public function getDiscoveryXMLConfigFile(): ?string\n    {\n        $url = "{$this->getWopiClientUrl()}/hosting/discovery";\n        $response = Http::get($url);\n\n        if ($response->status() !== 200) {\n            throw new Exception("Could not reach to the configuration discovery.xml file from {$url}");\n        }\n\n        return $response->body();\n    }\n\n')),(0,o.kt)("p",null,"For example see ",(0,o.kt)("a",{parentName:"p",href:"#"},"src/Services/DefaultConfigRepository")),(0,o.kt)("h2",{id:"note-on-swiping-implementations"},"Note on swiping implementations"),(0,o.kt)("p",null,"This package were built to be extremely fixable major classes can be swiped out with your own implementations."),(0,o.kt)("p",null,"Start with  a simple class to swipe ",(0,o.kt)("inlineCode",{parentName:"p"},"WopiRequest")," which currently doesn't implement any sort of authorization or validation. It also a great place to put your access token validation logic."))}d.isMDXComponent=!0}}]);