!function(e){var t={};function s(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=4)}([function(e,t){e.exports=require("debug")},function(e,t){e.exports=require("express")},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPort",{enumerable:!0,get:function(){return a.getPort}}),Object.defineProperty(t,"limiter",{enumerable:!0,get:function(){return o.limiter}}),Object.defineProperty(t,"validator",{enumerable:!0,get:function(){return r.validator}}),Object.defineProperty(t,"authenticate",{enumerable:!0,get:function(){return n.authenticate}}),Object.defineProperty(t,"logger",{enumerable:!0,get:function(){return u.logger}});var a=s(3),o=s(8),r=s(10),n=s(12),u=s(13)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPort",{enumerable:!0,get:function(){return a.getPort}}),Object.defineProperty(t,"getPassword",{enumerable:!0,get:function(){return o.getPassword}});var a=s(6),o=s(7)},function(e,t,s){"use strict";var a=i(s(1)),o=i(s(0)),r=s(5),n=s(2),u=s(15);function i(e){return e&&e.__esModule?e:{default:e}}const l=(0,o.default)("server:main"),c=(0,n.getPort)();r.app.use(a.default.json({limit:"10kb"})),r.app.use("/api",u.auth),r.app.use("/api/users",u.users),r.app.use("/api/classes",u.classes),r.app.use("/api/lessons",u.lessons),r.app.listen(c,()=>{l(`Server API is up on port ${c}`)})},function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.app=void 0;const o=(0,((a=s(1))&&a.__esModule?a:{default:a}).default)();t.app=o},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPort=void 0;t.getPort=()=>{const{PORT:e}=process.env;if(!e)throw new Error("Environment variable PORT should be specified");if(!/^[3-9]{1}[0-9]{3}$/.test(e))throw new Error("Environment variable PORT should a number and be between 3000 and 9999");return e}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPassword=void 0;t.getPassword=()=>{const{PASSWORD:e}=process.env;if(!e)throw new Error("Environment variable PASSWORD should be specified");if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(e))throw new Error("Environment variable PASSWORD should have a minimum eight characters, at least one letter, one number and one special character");return e}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.limiter=void 0;var a,o=(a=s(9))&&a.__esModule?a:{default:a};t.limiter=(e,t)=>(0,o.default)({windowMs:t,max:e,headers:!1})},function(e,t){e.exports=require("express-rate-limit")},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validator=void 0;var a,o=(a=s(11))&&a.__esModule?a:{default:a};t.validator=e=>(t,s,a)=>{const r=new o.default({allErrors:!0}).compile(e);if(r(t.body))return a();const n=r.errors.map(({message:e})=>e).join(", ");s.status(400).json({message:n})}},function(e,t){e.exports=require("ajv")},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.authenticate=void 0;const a=(0,s(3).getPassword)();t.authenticate=(e,t,s)=>{const o=e.header("authorization");o&&o===a?s():t.status(401).json({message:"authentication credentials are not valid"})}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logger=void 0;var a=s(14);const{combine:o,timestamp:r,label:n,printf:u}=a.format,i=u(({level:e,message:t,label:s,timestamp:a})=>`${a} [${s}] ${e}: ${t}`),l=(0,a.createLogger)({format:o(n({label:"school API"}),r(),i),level:"debug",transports:[new a.transports.Console]});t.logger=l},function(e,t){e.exports=require("winston")},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"auth",{enumerable:!0,get:function(){return a.auth}}),Object.defineProperty(t,"users",{enumerable:!0,get:function(){return o.users}}),Object.defineProperty(t,"classes",{enumerable:!0,get:function(){return r.classes}}),Object.defineProperty(t,"lessons",{enumerable:!0,get:function(){return n.lessons}});var a=s(16),o=s(18),r=s(23),n=s(27)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.auth=t.router=void 0;var a,o=(a=s(1))&&a.__esModule?a:{default:a},r=s(17),n=s(2);const u=o.default.Router();t.auth=t.router=u,u.post("/login",[(0,n.limiter)(5,6e4)],r.login),u.post("/logout",[n.authenticate,(0,n.limiter)(5,6e4)],r.logout)},function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.logout=t.login=void 0;const o=(0,((a=s(0))&&a.__esModule?a:{default:a}).default)("router:auth");t.login=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{t.sendStatus(204)}catch(e){t.status(400).json({message:e.message})}};t.logout=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{t.sendStatus(204)}catch(e){t.status(400).json({message:e.message})}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.users=t.router=void 0;var a,o=(a=s(1))&&a.__esModule?a:{default:a},r=s(19),n=s(20),u=s(2),i=s(21);const l=o.default.Router();t.users=t.router=l,l.get("/",[u.authenticate,(0,u.limiter)(5,6e4)],r.get),l.post("/",[(0,u.validator)(i.createUser)],r.post),l.get("/:userHash",[u.authenticate],n.getByHash),l.put("/:userHash",[u.authenticate],n.updateByHash),l.delete("/:userHash",[u.authenticate],n.removeByHash)},function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.post=t.get=void 0;const o=(0,((a=s(0))&&a.__esModule?a:{default:a}).default)("router:users");t.get=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e=[];t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}};t.post=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(201).json({data:e})}catch(e){t.status(400).json({message:e.message})}}},function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.removeByHash=t.updateByHash=t.getByHash=void 0;const o=(0,((a=s(0))&&a.__esModule?a:{default:a}).default)("router:users:hash");t.getByHash=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}};t.updateByHash=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}};t.removeByHash=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{t.sendStatus(204)}catch(e){t.status(400).json({message:e.message})}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createUser",{enumerable:!0,get:function(){return a.createUser}});var a=s(22)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createUser=void 0;t.createUser={type:"object",properties:{name:{type:"string",minLength:3},email:{type:"string",format:"email"}},required:["name","email"],additionalProperties:!1}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.classes=t.router=void 0;var a,o=(a=s(1))&&a.__esModule?a:{default:a},r=s(24),n=s(25),u=s(26),i=s(2);const l=o.default.Router();t.classes=t.router=l,l.get("/",r.get),l.post("/",[i.authenticate],r.post),l.get("/:classHash",[i.authenticate],n.getByHash),l.put("/:classHash",[i.authenticate],n.updateByHash),l.delete("/:classHash",[i.authenticate],n.removeByHash),l.post("/:classHash/enroll",[i.authenticate],u.enroll),l.post("/:classHash/expel",[i.authenticate],u.expel)},function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.post=t.get=void 0;const o=(0,((a=s(0))&&a.__esModule?a:{default:a}).default)("router:classes");t.get=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e=[];t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}};t.post=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(201).json({data:e})}catch(e){t.status(400).json({message:e.message})}}},function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.removeByHash=t.updateByHash=t.getByHash=void 0;const o=(0,((a=s(0))&&a.__esModule?a:{default:a}).default)("router:classes:hash");t.getByHash=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}};t.updateByHash=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}};t.removeByHash=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{t.sendStatus(204)}catch(e){t.status(400).json({message:e.message})}}},function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.expel=t.enroll=void 0;const o=(0,((a=s(0))&&a.__esModule?a:{default:a}).default)("router:classes:education");t.enroll=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e=[];t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}};t.expel=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(201).json({data:e})}catch(e){t.status(400).json({message:e.message})}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lessons=t.router=void 0;var a,o=(a=s(1))&&a.__esModule?a:{default:a},r=s(28),n=s(29),u=s(30),i=s(31),l=s(32),c=s(33),d=s(2);const h=o.default.Router();t.lessons=t.router=h,h.get("/",r.get),h.post("/",[d.authenticate],r.post),h.get("/:lessonHash",[d.authenticate],n.getByHash),h.put("/:lessonHash",[d.authenticate],n.updateByHash),h.delete("/:lessonHash",[d.authenticate],n.removeByHash),h.post("/:lessonHash/videos",[d.authenticate],c.addVideo),h.post("/:lessonHash/keynotes",[d.authenticate],u.addKeynote),h.get("/:lessonHash/videos/:videoHash",[d.authenticate],l.getVideoByHash),h.delete("/:lessonHash/videos/:videoHash",[d.authenticate],l.removeVideoByHash),h.get("/:lessonHash/keynotes/:keynoteHash",[d.authenticate],i.getKeynoteByHash),h.delete("/:lessonHash/keynotes/:keynoteHash",[d.authenticate],i.removeKeynoteByHash)},function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.post=t.get=void 0;const o=(0,((a=s(0))&&a.__esModule?a:{default:a}).default)("router:lessons");t.get=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e=[];t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}};t.post=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(201).json({data:e})}catch(e){t.status(400).json({message:e.message})}}},function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.removeByHash=t.updateByHash=t.getByHash=void 0;const o=(0,((a=s(0))&&a.__esModule?a:{default:a}).default)("router:lessons:hash");t.getByHash=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}};t.updateByHash=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}};t.removeByHash=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{t.sendStatus(204)}catch(e){t.status(400).json({message:e.message})}}},function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.addKeynote=void 0;const o=(0,((a=s(0))&&a.__esModule?a:{default:a}).default)("router:lessons:keynotes");t.addKeynote=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}}},function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.removeKeynoteByHash=t.getKeynoteByHash=void 0;const o=(0,((a=s(0))&&a.__esModule?a:{default:a}).default)("router:lessons:keynotes:hash");t.getKeynoteByHash=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}};t.removeKeynoteByHash=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}}},function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.removeVideoByHash=t.getVideoByHash=void 0;const o=(0,((a=s(0))&&a.__esModule?a:{default:a}).default)("router:lessons:videos:hash");t.getVideoByHash=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}};t.removeVideoByHash=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}}},function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.addVideo=void 0;const o=(0,((a=s(0))&&a.__esModule?a:{default:a}).default)("router:lessons:videos");t.addVideo=(e,t)=>{o(`${e.method} - ${e.originalUrl}`);try{const e={};t.status(200).json({data:e})}catch(e){t.status(400).json({message:e.message})}}}]);