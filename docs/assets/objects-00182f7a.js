import{bk as A,i as v,x as O,r as W,bl as B,B as R,H as N,C as D,D as M,aw as J}from"./index-4e8c3d37.js";var $=/\s/;function K(e){for(var t=e.length;t--&&$.test(e.charAt(t)););return t}var Y=/^\s+/;function G(e){return e&&e.slice(0,K(e)+1).replace(Y,"")}var C=0/0,U=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,H=/^0o[0-7]+$/i,j=parseInt;function S(e){if(typeof e=="number")return e;if(A(e))return C;if(v(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=v(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=G(e);var a=_.test(e);return a||H.test(e)?j(e.slice(2),a?2:8):U.test(e)?C:+e}function L(e,t,a){var r=e==null?void 0:O(e,t);return r===void 0?a:r}var z=function(){return W.Date.now()};const b=z;var X="Expected a function",q=Math.max,Q=Math.min;function oe(e,t,a){var r,i,l,u,o,c,d=0,x=!1,m=!1,h=!0;if(typeof e!="function")throw new TypeError(X);t=S(t)||0,v(a)&&(x=!!a.leading,m="maxWait"in a,l=m?q(S(a.maxWait)||0,t):l,h="trailing"in a?!!a.trailing:h);function p(n){var s=r,f=i;return r=i=void 0,d=n,u=e.apply(f,s),u}function P(n){return d=n,o=setTimeout(g,t),x?p(n):u}function E(n){var s=n-c,f=n-d,w=t-s;return m?Q(w,l-f):w}function T(n){var s=n-c,f=n-d;return c===void 0||s>=t||s<0||m&&f>=l}function g(){var n=b();if(T(n))return k(n);o=setTimeout(g,E(n))}function k(n){return o=void 0,h&&r?p(n):(r=i=void 0,u)}function F(){o!==void 0&&clearTimeout(o),d=0,r=c=i=o=void 0}function I(){return o===void 0?u:k(b())}function y(){var n=b(),s=T(n);if(r=arguments,i=this,c=n,s){if(o===void 0)return P(c);if(m)return clearTimeout(o),o=setTimeout(g,t),p(c)}return o===void 0&&(o=setTimeout(g,t)),u}return y.cancel=F,y.flush=I,y}function V(e,t,a){return e==null?e:B(e,t,a)}var Z={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color.",alphaLabel:"pick alpha value"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},mention:{loading:"Loading"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};const ee=e=>(t,a)=>te(t,a,M(e)),te=(e,t,a)=>L(a,e,e).replace(/\{(\w+)\}/g,(r,i)=>{var l;return`${(l=t==null?void 0:t[i])!=null?l:`{${i}}`}`}),ae=e=>{const t=D(()=>M(e).name),a=J(e)?e:N(e);return{lang:t,locale:a,t:ee(e)}},ne=Symbol("localeContextKey"),ie=e=>{const t=e||R(ne,N());return ae(D(()=>t.value||Z))},se=e=>Object.keys(e),le=(e,t,a)=>({get value(){return L(e,t,a)},set value(r){V(e,t,r)}});export{le as a,oe as d,L as g,se as k,ie as u};
