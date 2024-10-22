import{D as Gt,j as w,b as J,i as Dt,w as Vt,E as Ut,f as Ft,T as $t,n as it}from"./index1-CD7eoi-i.js";const R=Object.create(null),st=Object.create(null);function tt(r,t){let e=st[r];return e===void 0&&(R[t]===void 0&&(R[t]=1),st[r]=e=R[t]++),e}let P;function _t(){return(!P||P!=null&&P.isContextLost())&&(P=Gt.get().createCanvas().getContext("webgl",{})),P}let z;function kt(){if(!z){z="mediump";const r=_t();r&&r.getShaderPrecisionFormat&&(z=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision?"highp":"mediump")}return z}function Ot(r,t,e){return t?r:e?(r=r.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${r}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${r}
        `}function Nt(r,t,e){const i=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(r.substring(0,9)!=="precision"){let s=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return s==="highp"&&i!=="highp"&&(s="mediump"),`precision ${s} float;
${r}`}else if(i!=="highp"&&r.substring(0,15)==="precision highp")return r.replace("precision highp","precision mediump");return r}function Lt(r,t){return t?`#version 300 es
${r}`:r}const jt={},Ht={};function Yt(r,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const i=e?jt:Ht;return i[t]?(i[t]++,t+=`-${i[t]}`):i[t]=1,r.indexOf("#define SHADER_NAME")!==-1?r:`${`#define SHADER_NAME ${t}`}
${r}`}function Wt(r,t){return t?r.replace("#version 300 es",""):r}const G={stripVersion:Wt,ensurePrecision:Nt,addProgramDefines:Ot,setProgramName:Yt,insertVersion:Lt},D=Object.create(null),vt=class K{constructor(t){t={...K.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,i={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:kt()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let s=t.fragment,n=t.vertex;Object.keys(G).forEach(a=>{const o=i[a];s=G[a](s,o,!0),n=G[a](n,o,!1)}),this.fragment=s,this.vertex=n,this._key=tt(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return D[e]||(D[e]=new K(t)),D[e]}};vt.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let yt=vt;const nt={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Xt(r){return nt[r]??nt.float32}const Kt={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Qt({source:r,entryPoint:t}){const e={},i=r.indexOf(`fn ${t}`);if(i!==-1){const s=r.indexOf("->",i);if(s!==-1){const n=r.substring(i,s),a=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let o;for(;(o=a.exec(n))!==null;){const u=Kt[o[3]]??"float32";e[o[2]]={location:parseInt(o[1],10),format:u,stride:Xt(u).stride,offset:0,instance:!1,start:0}}}}return e}function V(r){var f,m;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,i=/@binding\((\d+)\)/,s=/var(<[^>]+>)? (\w+)/,n=/:\s*(\w+)/,a=/struct\s+(\w+)\s*{([^}]+)}/g,o=/(\w+)\s*:\s*([\w\<\>]+)/g,u=/struct\s+(\w+)/,h=(f=r.match(t))==null?void 0:f.map(d=>({group:parseInt(d.match(e)[1],10),binding:parseInt(d.match(i)[1],10),name:d.match(s)[2],isUniform:d.match(s)[1]==="<uniform>",type:d.match(n)[1]}));if(!h)return{groups:[],structs:[]};const l=((m=r.match(a))==null?void 0:m.map(d=>{const p=d.match(u)[1],c=d.match(o).reduce((v,g)=>{const[_,x]=g.split(":");return v[_.trim()]=x.trim(),v},{});return c?{name:p,members:c}:null}).filter(({name:d})=>h.some(p=>p.type===d)))??[];return{groups:h,structs:l}}var I=(r=>(r[r.VERTEX=1]="VERTEX",r[r.FRAGMENT=2]="FRAGMENT",r[r.COMPUTE=4]="COMPUTE",r))(I||{});function qt({groups:r}){const t=[];for(let e=0;e<r.length;e++){const i=r[e];t[i.group]||(t[i.group]=[]),i.isUniform?t[i.group].push({binding:i.binding,visibility:I.VERTEX|I.FRAGMENT,buffer:{type:"uniform"}}):i.type==="sampler"?t[i.group].push({binding:i.binding,visibility:I.FRAGMENT,sampler:{type:"filtering"}}):i.type==="texture_2d"&&t[i.group].push({binding:i.binding,visibility:I.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function Zt({groups:r}){const t=[];for(let e=0;e<r.length;e++){const i=r[e];t[i.group]||(t[i.group]={}),t[i.group][i.name]=i.binding}return t}function Jt(r,t){const e=new Set,i=new Set,s=[...r.structs,...t.structs].filter(a=>e.has(a.name)?!1:(e.add(a.name),!0)),n=[...r.groups,...t.groups].filter(a=>{const o=`${a.name}-${a.binding}`;return i.has(o)?!1:(i.add(o),!0)});return{structs:s,groups:n}}const U=Object.create(null);class C{constructor(t){var o,u;this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:e,vertex:i,layout:s,gpuLayout:n,name:a}=t;if(this.name=a,this.fragment=e,this.vertex=i,e.source===i.source){const h=V(e.source);this.structsAndGroups=h}else{const h=V(i.source),l=V(e.source);this.structsAndGroups=Jt(h,l)}this.layout=s??Zt(this.structsAndGroups),this.gpuLayout=n??qt(this.structsAndGroups),this.autoAssignGlobalUniforms=((o=this.layout[0])==null?void 0:o.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((u=this.layout[1])==null?void 0:u.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,i=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=tt(i,"program")}get attributeData(){return this._attributeData??(this._attributeData=Qt(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return U[e]||(U[e]=new C(t)),U[e]}}const St=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],te=St.reduce((r,t)=>(r[t]=!0,r),{});function ee(r,t){switch(r){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const At=class wt{constructor(t,e){this._touched=0,this.uid=w("uniform"),this._resourceType="uniformGroup",this._resourceId=w("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...wt.defaultOptions,...e},this.uniformStructures=t;const i={};for(const s in t){const n=t[s];if(n.name=s,n.size=n.size??1,!te[n.type])throw new Error(`Uniform type ${n.type} is not supported. Supported uniform types are: ${St.join(", ")}`);n.value??(n.value=ee(n.type,n.size)),i[s]=n.value}this.uniforms=i,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=tt(Object.keys(i).map(s=>`${s}-${t[s].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};At.defaultOptions={ubo:!1,isStatic:!1};let Pt=At;class F{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const i in t){const s=t[i];this.setResource(s,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const i in this.resources)t[e++]=this.resources[i]._resourceId;this._key=t.join("|")}setResource(t,e){var s,n;const i=this.resources[e];t!==i&&(i&&((s=t.off)==null||s.call(t,"change",this.onResourceChange,this)),(n=t.on)==null||n.call(t,"change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const e=this.resources;for(const i in e)e[i]._touched=t}destroy(){var e;const t=this.resources;for(const i in t){const s=t[i];(e=s.off)==null||e.call(s,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const i in e)e[i]===t&&(e[i]=null)}else this._updateKey()}}var Q=(r=>(r[r.WEBGL=1]="WEBGL",r[r.WEBGPU=2]="WEBGPU",r[r.BOTH=3]="BOTH",r))(Q||{});class et extends J{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:e,glProgram:i,groups:s,resources:n,compatibleRenderers:a,groupMap:o}=t;this.gpuProgram=e,this.glProgram=i,a===void 0&&(a=0,e&&(a|=Q.WEBGPU),i&&(a|=Q.WEBGL)),this.compatibleRenderers=a;const u={};if(!n&&!s&&(n={}),n&&s)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&s&&!o)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&s&&o)for(const h in o)for(const l in o[h]){const f=o[h][l];u[f]={group:h,binding:l,name:f}}else if(e&&s&&!o){const h=e.structsAndGroups.groups;o={},h.forEach(l=>{o[l.group]=o[l.group]||{},o[l.group][l.binding]=l.name,u[l.name]=l})}else if(n){s={},o={},e&&e.structsAndGroups.groups.forEach(f=>{o[f.group]=o[f.group]||{},o[f.group][f.binding]=f.name,u[f.name]=f});let h=0;for(const l in n)u[l]||(s[99]||(s[99]=new F,this._ownedBindGroups.push(s[99])),u[l]={group:99,binding:h,name:l},o[99]=o[99]||{},o[99][h]=l,h++);for(const l in n){const f=l;let m=n[l];!m.source&&!m._resourceType&&(m=new Pt(m));const d=u[f];d&&(s[d.group]||(s[d.group]=new F,this._ownedBindGroups.push(s[d.group])),s[d.group].setResource(m,d.binding))}}this.groups=s,this._uniformBindMap=o,this.resources=this._buildResourceAccessor(s,u)}addResource(t,e,i){var s,n;(s=this._uniformBindMap)[e]||(s[e]={}),(n=this._uniformBindMap[e])[i]||(n[i]=t),this.groups[e]||(this.groups[e]=new F,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const i={};for(const s in e){const n=e[s];Object.defineProperty(i,n.name,{get(){return t[n.group].getResource(n.binding)},set(a){t[n.group].setResource(a,n.binding)}})}return i}destroy(t=!1){var e,i;this.emit("destroy",this),t&&((e=this.gpuProgram)==null||e.destroy(),(i=this.glProgram)==null||i.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(s=>{s.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:e,gl:i,...s}=t;let n,a;return e&&(n=C.from(e)),i&&(a=yt.from(i)),new et({gpuProgram:n,glProgram:a,...s})}}const re={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},$=0,k=1,O=2,N=3,L=4,j=5,q=class Et{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<$)}set blend(t){!!(this.data&1<<$)!==t&&(this.data^=1<<$)}get offsets(){return!!(this.data&1<<k)}set offsets(t){!!(this.data&1<<k)!==t&&(this.data^=1<<k)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<O)}set culling(t){!!(this.data&1<<O)!==t&&(this.data^=1<<O)}get depthTest(){return!!(this.data&1<<N)}set depthTest(t){!!(this.data&1<<N)!==t&&(this.data^=1<<N)}get depthMask(){return!!(this.data&1<<j)}set depthMask(t){!!(this.data&1<<j)!==t&&(this.data^=1<<j)}get clockwiseFrontFace(){return!!(this.data&1<<L)}set clockwiseFrontFace(t){!!(this.data&1<<L)!==t&&(this.data^=1<<L)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=re[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new Et;return t.depthTest=!1,t.blend=!0,t}};q.default2d=q.for2d();let Xe=q;const ie=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function se(r){let t="";for(let e=0;e<r;++e)e>0&&(t+=`
else `),e<r-1&&(t+=`if(test == ${e}.0){}`);return t}function ne(r,t){if(r===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const e=t.createShader(t.FRAGMENT_SHADER);try{for(;;){const i=ie.replace(/%forloop%/gi,se(r));if(t.shaderSource(e,i),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))r=r/2|0;else break}}finally{t.deleteShader(e)}return r}let E=null;function oe(){var t;if(E)return E;const r=_t();return E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=ne(E,r),(t=r.getExtension("WEBGL_lose_context"))==null||t.loseContext(),E}class ot{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function at(r,t){const e=r.byteLength/8|0,i=new Float64Array(r,0,e);new Float64Array(t,0,e).set(i);const n=r.byteLength-e*8;if(n>0){const a=new Uint8Array(r,e*8,n);new Uint8Array(t,e*8,n).set(a)}}const ae={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var ue=(r=>(r[r.DISABLED=0]="DISABLED",r[r.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",r[r.MASK_ACTIVE=2]="MASK_ACTIVE",r[r.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",r[r.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",r[r.NONE=5]="NONE",r))(ue||{});function ut(r,t){return t.alphaMode==="no-premultiply-alpha"&&ae[r]||r}class ce{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class le{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new ce,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}const Tt=[];let Z=0;function ct(){return Z>0?Tt[--Z]:new le}function lt(r){Tt[Z++]=r}let T=0;const It=class M{constructor(t={}){this.uid=w("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],M.defaultOptions.maxTextures=M.defaultOptions.maxTextures??oe(),t={...M.defaultOptions,...t};const{maxTextures:e,attributesInitialSize:i,indicesInitialSize:s}=t;this.attributeBuffer=new ot(i*4),this.indexBuffer=new Uint16Array(s),this.maxTextures=e}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let t=0;t<this.batchIndex;t++)lt(this.batches[t]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t._indexStart=this.indexSize,t._attributeStart=this.attributeSize,t._batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.attributeSize*this.vertexSize}checkAndUpdateTexture(t,e){const i=t._batch.textures.ids[e._source.uid];return!i&&i!==0?!1:(t._textureId=i,t.texture=e,!0)}updateElement(t){this.dirty=!0;const e=this.attributeBuffer;t.packAsQuad?this.packQuadAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId):this.packAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId)}break(t){const e=this._elements;if(!e[this.elementStart])return;let i=ct(),s=i.textures;s.clear();const n=e[this.elementStart];let a=ut(n.blendMode,n.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const o=this.attributeBuffer.float32View,u=this.attributeBuffer.uint32View,h=this.indexBuffer;let l=this._batchIndexSize,f=this._batchIndexStart,m="startBatch";const d=this.maxTextures;for(let p=this.elementStart;p<this.elementSize;++p){const c=e[p];e[p]=null;const g=c.texture._source,_=ut(c.blendMode,g),x=a!==_;if(g._batchTick===T&&!x){c._textureId=g._textureBindLocation,l+=c.indexSize,c.packAsQuad?(this.packQuadAttributes(c,o,u,c._attributeStart,c._textureId),this.packQuadIndex(h,c._indexStart,c._attributeStart/this.vertexSize)):(this.packAttributes(c,o,u,c._attributeStart,c._textureId),this.packIndex(c,h,c._indexStart,c._attributeStart/this.vertexSize)),c._batch=i;continue}g._batchTick=T,(s.count>=d||x)&&(this._finishBatch(i,f,l-f,s,a,t,m),m="renderBatch",f=l,a=_,i=ct(),s=i.textures,s.clear(),++T),c._textureId=g._textureBindLocation=s.count,s.ids[g.uid]=s.count,s.textures[s.count++]=g,c._batch=i,l+=c.indexSize,c.packAsQuad?(this.packQuadAttributes(c,o,u,c._attributeStart,c._textureId),this.packQuadIndex(h,c._indexStart,c._attributeStart/this.vertexSize)):(this.packAttributes(c,o,u,c._attributeStart,c._textureId),this.packIndex(c,h,c._indexStart,c._attributeStart/this.vertexSize))}s.count>0&&(this._finishBatch(i,f,l-f,s,a,t,m),f=l,++T),this.elementStart=this.elementSize,this._batchIndexStart=f,this._batchIndexSize=l}_finishBatch(t,e,i,s,n,a,o){t.gpuBindGroup=null,t.bindGroup=null,t.action=o,t.batcher=this,t.textures=s,t.blendMode=n,t.start=e,t.size=i,++T,this.batches[this.batchIndex++]=t,a.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),i=new ot(e);at(this.attributeBuffer.rawBinaryData,i.rawBinaryData),this.attributeBuffer=i}_resizeIndexBuffer(t){const e=this.indexBuffer;let i=Math.max(t,e.length*1.5);i+=i%2;const s=i>65535?new Uint32Array(i):new Uint16Array(i);if(s.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let n=0;n<e.length;n++)s[n]=e[n];else at(e.buffer,s.buffer);this.indexBuffer=s}packQuadIndex(t,e,i){t[e]=i+0,t[e+1]=i+1,t[e+2]=i+2,t[e+3]=i+0,t[e+4]=i+2,t[e+5]=i+3}packIndex(t,e,i,s){const n=t.indices,a=t.indexSize,o=t.indexOffset,u=t.attributeOffset;for(let h=0;h<a;h++)e[i++]=s+n[h+o]-u}destroy(){for(let t=0;t<this.batches.length;t++)lt(this.batches[t]);this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t]._batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};It.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let he=It;var b=(r=>(r[r.MAP_READ=1]="MAP_READ",r[r.MAP_WRITE=2]="MAP_WRITE",r[r.COPY_SRC=4]="COPY_SRC",r[r.COPY_DST=8]="COPY_DST",r[r.INDEX=16]="INDEX",r[r.VERTEX=32]="VERTEX",r[r.UNIFORM=64]="UNIFORM",r[r.STORAGE=128]="STORAGE",r[r.INDIRECT=256]="INDIRECT",r[r.QUERY_RESOLVE=512]="QUERY_RESOLVE",r[r.STATIC=1024]="STATIC",r))(b||{});class B extends J{constructor(t){let{data:e,size:i}=t;const{usage:s,label:n,shrinkToFit:a}=t;super(),this.uid=w("buffer"),this._resourceType="buffer",this._resourceId=w("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,i=i??(e==null?void 0:e.byteLength);const o=!!e;this.descriptor={size:i,usage:s,mappedAtCreation:o,label:n},this.shrinkToFit=a??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get static(){return!!(this.descriptor.usage&b.STATIC)}set static(t){t?this.descriptor.usage|=b.STATIC:this.descriptor.usage&=~b.STATIC}setDataWithSize(t,e,i){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){i&&this.emit("update",this);return}const s=this._data;if(this._data=t,s.length!==t.length){!this.shrinkToFit&&t.byteLength<s.byteLength?i&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=w("resource"),this.emit("change",this));return}i&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Bt(r,t){if(!(r instanceof B)){let e=t?b.INDEX:b.VERTEX;r instanceof Array&&(t?(r=new Uint32Array(r),e=b.INDEX|b.COPY_DST):(r=new Float32Array(r),e=b.VERTEX|b.COPY_DST)),r=new B({data:r,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return r}function fe(r,t,e){const i=r.getAttribute(t);if(!i)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const s=i.buffer.data;let n=1/0,a=1/0,o=-1/0,u=-1/0;const h=s.BYTES_PER_ELEMENT,l=(i.offset||0)/h,f=(i.stride||2*4)/h;for(let m=l;m<s.length;m+=f){const d=s[m],p=s[m+1];d>o&&(o=d),p>u&&(u=p),d<n&&(n=d),p<a&&(a=p)}return e.minX=n,e.minY=a,e.maxX=o,e.maxY=u,e}function de(r){return(r instanceof B||Array.isArray(r)||r.BYTES_PER_ELEMENT)&&(r={buffer:r}),r.buffer=Bt(r.buffer,!1),r}class me extends J{constructor(t={}){super(),this.uid=w("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Dt,this._boundsDirty=!0;const{attributes:e,indexBuffer:i,topology:s}=t;if(this.buffers=[],this.attributes={},e)for(const n in e)this.addAttribute(n,e[n]);this.instanceCount=t.instanceCount||1,i&&this.addIndex(i),this.topology=s||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}addAttribute(t,e){const i=de(e);this.buffers.indexOf(i.buffer)===-1&&(this.buffers.push(i.buffer),i.buffer.on("update",this.onBufferUpdate,this),i.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=i}addIndex(t){this.indexBuffer=Bt(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,fe(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const pe=new Float32Array(1),ge=new Uint32Array(1);class xe extends me{constructor(){const e=new B({data:pe,label:"attribute-batch-buffer",usage:b.VERTEX|b.COPY_DST,shrinkToFit:!1}),i=new B({data:ge,label:"index-batch-buffer",usage:b.INDEX|b.COPY_DST,shrinkToFit:!1}),s=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:s,offset:0},aUV:{buffer:e,format:"float32x2",stride:s,offset:2*4},aColor:{buffer:e,format:"unorm8x4",stride:s,offset:4*4},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:s,offset:5*4}},indexBuffer:i})}}function ht(r,t,e){if(r)for(const i in r){const s=i.toLocaleLowerCase(),n=t[s];if(n){let a=r[i];i==="header"&&(a=a.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),e&&n.push(`//----${e}----//`),n.push(a)}else Vt(`${i} placement hook does not exist in shader`)}}const be=/\{\{(.*?)\}\}/g;function ft(r){var i;const t={};return(((i=r.match(be))==null?void 0:i.map(s=>s.replace(/[{()}]/g,"")))??[]).forEach(s=>{t[s]=[]}),t}function dt(r,t){let e;const i=/@in\s+([^;]+);/g;for(;(e=i.exec(r))!==null;)t.push(e[1])}function mt(r,t,e=!1){const i=[];dt(t,i),r.forEach(o=>{o.header&&dt(o.header,i)});const s=i;e&&s.sort();const n=s.map((o,u)=>`       @location(${u}) ${o},`).join(`
`);let a=t.replace(/@in\s+[^;]+;\s*/g,"");return a=a.replace("{{in}}",`
${n}
`),a}function pt(r,t){let e;const i=/@out\s+([^;]+);/g;for(;(e=i.exec(r))!==null;)t.push(e[1])}function _e(r){const e=/\b(\w+)\s*:/g.exec(r);return e?e[1]:""}function ve(r){const t=/@.*?\s+/g;return r.replace(t,"")}function ye(r,t){const e=[];pt(t,e),r.forEach(u=>{u.header&&pt(u.header,e)});let i=0;const s=e.sort().map(u=>u.indexOf("builtin")>-1?u:`@location(${i++}) ${u}`).join(`,
`),n=e.sort().map(u=>`       var ${ve(u)};`).join(`
`),a=`return VSOutput(
                ${e.sort().map(u=>` ${_e(u)}`).join(`,
`)});`;let o=t.replace(/@out\s+[^;]+;\s*/g,"");return o=o.replace("{{struct}}",`
${s}
`),o=o.replace("{{start}}",`
${n}
`),o=o.replace("{{return}}",`
${a}
`),o}function gt(r,t){let e=r;for(const i in t){const s=t[i];s.join(`
`).length?e=e.replace(`{{${i}}}`,`//-----${i} START-----//
${s.join(`
`)}
//----${i} FINISH----//`):e=e.replace(`{{${i}}}`,"")}return e}const S=Object.create(null),H=new Map;let Se=0;function Ae({template:r,bits:t}){const e=zt(r,t);if(S[e])return S[e];const{vertex:i,fragment:s}=Pe(r,t);return S[e]=Mt(i,s,t),S[e]}function we({template:r,bits:t}){const e=zt(r,t);return S[e]||(S[e]=Mt(r.vertex,r.fragment,t)),S[e]}function Pe(r,t){const e=t.map(a=>a.vertex).filter(a=>!!a),i=t.map(a=>a.fragment).filter(a=>!!a);let s=mt(e,r.vertex,!0);s=ye(e,s);const n=mt(i,r.fragment,!0);return{vertex:s,fragment:n}}function zt(r,t){return t.map(e=>(H.has(e)||H.set(e,Se++),H.get(e))).sort((e,i)=>e-i).join("-")+r.vertex+r.fragment}function Mt(r,t,e){const i=ft(r),s=ft(t);return e.forEach(n=>{ht(n.vertex,i,n.name),ht(n.fragment,s,n.name)}),{vertex:gt(r,i),fragment:gt(t,s)}}const Ee=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,Te=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,Ie=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,Be=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
        
        {{end}}
    }
`,ze={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},Me={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function Ce({bits:r,name:t}){const e=Ae({template:{fragment:Te,vertex:Ee},bits:[ze,...r]});return C.from({name:t,vertex:{source:e.vertex,entryPoint:"main"},fragment:{source:e.fragment,entryPoint:"main"}})}function Re({bits:r,name:t}){return new yt({name:t,...we({template:{vertex:Ie,fragment:Be},bits:[Me,...r]})})}const Ge={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},De={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},Y={};function Ve(r){const t=[];if(r===1)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let e=0;for(let i=0;i<r;i++)t.push(`@group(1) @binding(${e++}) var textureSource${i+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${e++}) var textureSampler${i+1}: sampler;`)}return t.join(`
`)}function Ue(r){const t=[];if(r===1)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let e=0;e<r;e++)e===r-1?t.push("  default:{"):t.push(`  case ${e}:{`),t.push(`      outColor = textureSampleGrad(textureSource${e+1}, textureSampler${e+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join(`
`)}function Fe(r){return Y[r]||(Y[r]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${Ve(r)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${Ue(r)}
            `}}),Y[r]}const W={};function $e(r){const t=[];for(let e=0;e<r;e++)e>0&&t.push("else"),e<r-1&&t.push(`if(vTextureId < ${e}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${e}], vUV);`),t.push("}");return t.join(`
`)}function ke(r){return W[r]||(W[r]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${r}];

            `,main:`

                ${$e(r)}
            `}}),W[r]}const Oe={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Ne={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},xt={};function Le(r){let t=xt[r];if(t)return t;const e=new Int32Array(r);for(let i=0;i<r;i++)e[i]=i;return t=xt[r]=new Pt({uTextures:{value:e,type:"i32",size:r}},{isStatic:!0}),t}class je extends et{constructor(t){const e=Re({name:"batch",bits:[De,ke(t),Ne]}),i=Ce({name:"batch",bits:[Ge,Fe(t),Oe]});super({glProgram:e,gpuProgram:i,resources:{batchSamplers:Le(t)}})}}let bt=null;const Ct=class Rt extends he{constructor(){super(...arguments),this.geometry=new xe,this.shader=bt||(bt=new je(this.maxTextures)),this.name=Rt.extension.name,this.vertexSize=6}packAttributes(t,e,i,s,n){const a=n<<16|t.roundPixels&65535,o=t.transform,u=o.a,h=o.b,l=o.c,f=o.d,m=o.tx,d=o.ty,{positions:p,uvs:c}=t,v=t.color,g=t.attributeOffset,_=g+t.attributeSize;for(let x=g;x<_;x++){const y=x*2,A=p[y],rt=p[y+1];e[s++]=u*A+l*rt+m,e[s++]=f*rt+h*A+d,e[s++]=c[y],e[s++]=c[y+1],i[s++]=v,i[s++]=a}}packQuadAttributes(t,e,i,s,n){const a=t.texture,o=t.transform,u=o.a,h=o.b,l=o.c,f=o.d,m=o.tx,d=o.ty,p=t.bounds,c=p.maxX,v=p.minX,g=p.maxY,_=p.minY,x=a.uvs,y=t.color,A=n<<16|t.roundPixels&65535;e[s+0]=u*v+l*_+m,e[s+1]=f*_+h*v+d,e[s+2]=x.x0,e[s+3]=x.y0,i[s+4]=y,i[s+5]=A,e[s+6]=u*c+l*_+m,e[s+7]=f*_+h*c+d,e[s+8]=x.x1,e[s+9]=x.y1,i[s+10]=y,i[s+11]=A,e[s+12]=u*c+l*g+m,e[s+13]=f*g+h*c+d,e[s+14]=x.x2,e[s+15]=x.y2,i[s+16]=y,i[s+17]=A,e[s+18]=u*v+l*g+m,e[s+19]=f*g+h*v+d,e[s+20]=x.x3,e[s+21]=x.y3,i[s+22]=y,i[s+23]=A}};Ct.extension={type:[Ut.Batcher],name:"default"};let Ke=Ct,He=0;class Ye{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,e,i){const s=new Ft({...this.textureOptions,width:t,height:e,resolution:1,antialias:i,autoGarbageCollect:!0});return new $t({source:s,label:`texturePool_${He++}`})}getOptimalTexture(t,e,i=1,s){let n=Math.ceil(t*i-1e-6),a=Math.ceil(e*i-1e-6);n=it(n),a=it(a);const o=(n<<17)+(a<<1)+(s?1:0);this._texturePool[o]||(this._texturePool[o]=[]);let u=this._texturePool[o].pop();return u||(u=this.createTexture(n,a,s)),u.source._resolution=i,u.source.width=n/i,u.source.height=a/i,u.source.pixelWidth=n,u.source.pixelHeight=a,u.frame.x=0,u.frame.y=0,u.frame.width=t,u.frame.height=e,u.updateUvs(),this._poolKeyHash[u.uid]=o,u}getSameSizeTexture(t,e=!1){const i=t.source;return this.getOptimalTexture(t.width,t.height,i._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const i=this._texturePool[e];if(i)for(let s=0;s<i.length;s++)i[s].destroy(!0)}this._texturePool={}}}const Qe=new Ye,X={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},qe={...X,vertex:{...X.vertex,header:X.vertex.header.replace("group(1)","group(2)")}},Ze={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}};class Je{constructor(){this.batcherName="default",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}}function tr(r,t,e){const i=(r>>24&255)/255;t[e++]=(r&255)/255*i,t[e++]=(r>>8&255)/255*i,t[e++]=(r>>16&255)/255*i,t[e++]=i}export{F as B,Ke as D,C as G,Q as R,Xe as S,Qe as T,Pt as U,ot as V,ue as a,b,B as c,tt as d,Ce as e,at as f,oe as g,Ge as h,Fe as i,et as j,X as k,qe as l,yt as m,Xt as n,Je as o,tr as p,me as q,Oe as r,Re as s,De as t,ke as u,Ze as v,Ne as w,Le as x,ut as y};
