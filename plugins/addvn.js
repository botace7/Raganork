(function(I,s){function B(I,s){return u(s- -'0x34d',I);}const n=I();function Y(I,s){return Z(I- -'0x326',s);}while(!![]){try{const K=-parseInt(Y(-'0x264',-'0x269'))/0x1*(parseInt(B('s33q',-'0x261'))/0x2)+parseInt(B('ocC5',-'0x272'))/0x3*(-parseInt(Y(-'0x248',-'0x26c'))/0x4)+-parseInt(B('3DGP',-'0x271'))/0x5+parseInt(Y(-'0x234',-'0x216'))/0x6+parseInt(B('rKfz',-'0x253'))/0x7*(parseInt(B('*vv*',-'0x245'))/0x8)+parseInt(Y(-'0x21a',-'0x20b'))/0x9*(-parseInt(B('uqM9',-'0x289'))/0xa)+parseInt(B('Cqrq',-'0x267'))/0xb;if(K===s)break;else n['push'](n['shift']());}catch(H){n['push'](n['shift']());}}}(F,0x5d3bd));function Z(u,I){const s=F();return Z=function(n,K){n=n-0xbf;let H=s[n];if(Z['xyvgdG']===undefined){var f=function(X){const j='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let T='',o='';for(let i=0x0,r,m,x=0x0;m=X['charAt'](x++);~m&&(r=i%0x4?r*0x40+m:m,i++%0x4)?T+=String['fromCharCode'](0xff&r>>(-0x2*i&0x6)):0x0){m=j['indexOf'](m);}for(let D=0x0,d=T['length'];D<d;D++){o+='%'+('00'+T['charCodeAt'](D)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(o);};Z['RqTjFb']=f,u=arguments,Z['xyvgdG']=!![];}const Y=s[0x0],B=n+Y,U=u[B];return!U?(H=Z['RqTjFb'](H),u[B]=H):H=U,H;},Z(u,I);}function u(Z,I){const s=F();return u=function(n,K){n=n-0xbf;let H=s[n];if(u['YTNGgX']===undefined){var f=function(j){const T='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let o='',i='';for(let r=0x0,m,x,D=0x0;x=j['charAt'](D++);~x&&(m=r%0x4?m*0x40+x:x,r++%0x4)?o+=String['fromCharCode'](0xff&m>>(-0x2*r&0x6)):0x0){x=T['indexOf'](x);}for(let d=0x0,c=o['length'];d<c;d++){i+='%'+('00'+o['charCodeAt'](d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(i);};const X=function(T,o){let r=[],m=0x0,D,d='';T=f(T);let c;for(c=0x0;c<0x100;c++){r[c]=c;}for(c=0x0;c<0x100;c++){m=(m+r[c]+o['charCodeAt'](c%o['length']))%0x100,D=r[c],r[c]=r[m],r[m]=D;}c=0x0,m=0x0;for(let v=0x0;v<T['length'];v++){c=(c+0x1)%0x100,m=(m+r[c])%0x100,D=r[c],r[c]=r[m],r[m]=D,d+=String['fromCharCode'](T['charCodeAt'](v)^r[(r[c]+r[m])%0x100]);}return d;};u['VPYqJb']=X,Z=arguments,u['YTNGgX']=!![];}const Y=s[0x0],B=n+Y,U=Z[B];return!U?(u['fhSsGZ']===undefined&&(u['fhSsGZ']=!![]),H=u['VPYqJb'](H,K),Z[B]=H):H=U,H;},u(Z,I);}const sk=require('fs'),fs=require(U('0x16a','0x15b')),path=require(U('0x14a','0x162'));function X(I,s){return u(I-'0x3c4',s);}const {MessageType,Mimetype}=require(X('0x48d','*voc')),Asena=require(X('0x497','UJ@N')),{successfullMessage,errorMessage,infoMessage}=require(U('0x130','0x146')),NotesDB=require(X('0x49d','@]1F')),Language=require(U('0x12a','0x120'));function U(I,s){return Z(s-'0x5d',I);}const Lang=Language['getString']('notes');Asena[U('0x136','0x15f')]({'pattern':U('0xfb','0x11d'),'fromMe':!![],'desc':Lang['SAVE_USAGE']},async(I,s)=>{function j(I,s){return U(I,s-'0xed');}function T(I,s){return X(I- -'0x8c',s);}const n=s[0x1];if(!I['reply_message']){await I[j('0x24d','0x24e')](T('0x41a','VJI0'));return;}else{if(!n){await I[j('0x23b','0x24e')]('_Give\x20me\x20any\x20keyword!_');return;}else{if(I['reply_message']){if(!I[T('0x443','Lpwz')][j('0x1f8','0x21f')]&&!I['reply_message']['video']&&!I[T('0x402','&4]0')]['sticker']&&!I[j('0x250','0x258')][j('0x1fb','0x210')]){const K=await I[T('0x437','gmAf')][j('0x254','0x250')]({'key':{'remoteJid':I[j('0x23b','0x258')]['jid'],'id':I[j('0x231','0x258')]['id']},'message':I['reply_message'][T('0x412','q^Em')][T('0x442','XN%d')]});let H=n+'.mp3';await fs[j('0x235','0x220')](j('0x24f','0x243')+path[j('0x1fb','0x211')](K),'./saved/'+H),await I[T('0x435','IY6p')]('_Successfully\x20added\x20'+n+j('0x212','0x21a'),MessageType[T('0x407','VBC8')]);}else return await I[j('0x227','0x24e')](j('0x21e','0x23d'));return;}}}}),Asena['addCommand']({'pattern':X('0x49b','rKfz'),'fromMe':!![],'dontAddCommandList':!![]},async(I,s)=>{const n=s[0x1];function o(I,s){return U(s,I-'0x27d');}if(!n&&!I[o('0x3e8','0x3d4')])return;function i(I,s){return X(I- -'0x21e',s);}if(n){await NotesDB[i('0x2a6','pIn4')](n);return;}}),Asena[U('0x15d','0x15f')]({'on':'text','fromMe':![]},async(I,s)=>{function r(I,s){return X(I- -'0x742',s);}const n=await NotesDB[r(-'0x29d','NwAJ')](),K=[];n['map'](H=>{function m(I,s){return Z(s- -'0x166',I);}!H[m(-'0x81',-'0xa7')]['includes'](m(-'0x73',-'0x75'))&&K['push'](H[m(-'0x92',-'0xa7')]);}),K[r(-'0x2b1','XqJS')](async H=>{function x(I,s){return Z(s-'0x44',I);}let f=new RegExp('\x5cb'+H+'\x5cb','g');function D(I,s){return r(s- -'0x45',I);}f[x('0x157','0x12e')](I[x('0x11c','0x129')])&&await I['client']['sendMessage'](I[D('g(VZ',-'0x302')],sk[D('WcT*',-'0x2b4')](x('0x139','0x124')+H+D('VBC8',-'0x2e0')),MessageType['audio'],{'mimetype':Mimetype[D('XqJS',-'0x2ba')],'quoted':I[x('0x148','0x14b')],'ptt':!![]});});}),Asena['addCommand']({'pattern':X('0x4b8','!k82'),'fromMe':!![],'desc':Lang[U('0x131','0x145')]},async(I,s)=>{function d(I,s){return U(s,I- -'0x1f7');}const n=s[0x1];function c(I,s){return X(I- -'0x6bc',s);}if(!I[d(-'0x8c',-'0x65')]){await I[c(-'0x224','XCXb')]('_Reply\x20to\x20any\x20audio!_');return;}else{if(!n){await I[d(-'0x96',-'0x8a')]('_Give\x20me\x20any\x20keyword!_');return;}else{if(I['reply_message']){if(!I[c(-'0x20d','Sfxr')][c(-'0x1fd','s33q')]&&!I[d(-'0x8c',-'0xa4')]['video']&&!I[c(-'0x22d','tFi9')][d(-'0x97',-'0x76')]&&!I[c(-'0x209','g#!w')][c(-'0x1fc','*xK$')]){const K=await I[d(-'0xa4',-'0xc6')]['downloadAndSaveMediaMessage']({'key':{'remoteJid':I[c(-'0x1f7','*voc')][c(-'0x203','NwAJ')],'id':I[c(-'0x20b','q^Em')]['id']},'message':I[c(-'0x1eb','XCXb')][c(-'0x219','TPJ&')][d(-'0xa3',-'0xc6')]});let H=n+'.mp3';await fs[c(-'0x208','Lpwz')](d(-'0xa1',-'0x83')+path['extname'](K),d(-'0xac',-'0xa1')+H),await I[d(-'0x96',-'0xb9')]('_Successfully\x20added\x20'+n+'\x20to\x20saved\x20bgms!_',MessageType[d(-'0xd4',-'0xdf')]);}else return await I[c(-'0x230','61h0')](c(-'0x233','g(VZ'));return;}}}});function F(){const y=['WPO9W5ddMa','WQxcHmkdW6DFrwvXgcRdVa','zNmVChjVBwLZzxm','W5DfthjQpW','W5L0W7jrkmk5WPdcUG','rt3dV8ovoYSoW4rXWOZcTmomWOq','ywrKq29TBwfUza','C3rPy2TLCG','C2vUze1LC3nHz2u','Cgf0Aa','zg93BMXVywrbBMrtyxzLtwvKAwfnzxnZywDL','zgf0yq','BComW7eTW5Tpk8o7WRtcR8khW5aC','C3JdL8o9WO/dGCkSWQC','WOi1W63cIrqijujtW4xcOCksdq','W5VcHSorWObKbCoQiSksWR3dPvtdLq','ovvYsMvNyG','W54SlxldHNNdImkorSkeW6NdLri','CMvWBhLFBwvZC2fNzq','W5u0W5WvW4BdSYxdTvpdI8k+hq','BM90zq','ywrKyMDTid8OlIOP','W5StW7O','mvLMy3zZzq','lI4VBgfUz3vHz2u','W5lcQ8kCW6apfazYW57cSwrdmG','W641W7agwcFdNYpcICoBW5JcJKBcOmoqve9PW7yBqSoLELC','Dgv4Da','zxH0BMfTzq','W73cLtlcQSozlvddK8o5ymow','DZNdQ8oqnrujW5jQWPBcU8omW442W6VcRehdQbax','vw8BmIVcKSk5jSkwW4BcK8odW4y','w8ksD1VdJHNdLCowdCkmWRSFWOu','WP17BYJcJX7dImkJy8k6W7NdUW','C2NcKW','nNjvuKvzrG','W4JdKSkgW5e','ihrVihnHDMvKigjNBxmHxW','WRDZW6nuW5RdNmk3WPlcGrJdICkxW4S','WP15zcJcIHxcLCkCF8kzW4ldKaa','uCk/l8o6WPGYcSkBqq','W58Sm3RdSKpdLSkyvmkqW60','Aw1Hz2u','CMvUyw1L','BCkHW6ddVrVdQujplmkFtmkx','WOureIa8C8k1W7BcV8kfFHKQ','BCoJASkEjaPOWR3dP8kMta','WPe3WOju','W43dNCo4WQldPmkfWQq','W7qmW447q8kFWOldMSoQWRS7xW','eMdcMJaqWOnTDJ/cUCkAWRdcLG','mtiYnJa4BuHwtxfj','WP7dRdXH','lI9ZyxzLzc8','W4aqCJBdNGtcVSoI','kSoeihJdQCkkWRfOW5ObWPbMWRWMWRSPpSk5A8oElW','WPldMSkoWPy','u3lcGSoRd8oYz1pcMCoXWR3cMW','BwvZC2fNzq','wNVcU8oBkmkPaSoNr8kZmSoEqq','mtr1vhPyz0i','u0fwrv9vu0fhrq','lI4VAgvSCgvYCW','DgvZDa','dKKWWRBcQmkID8kKoSosWRtdSmkP','W6WdoMtcSIJdJrbSWOJcH8kCwG','WOCZWOzzW4afW4uJqIJdTqlcVa','lI9ZB3vYyxyV','bIZdQ8oHWORcJCo3pCk0W6xdH8oKAW','W5VcHSopWO1WpW','su1hoZS7','mZeXotm4og5nChfkvW','x09UBhKGD29YA3mGD2L0AcbHDwrPBYfF','ktlcQSoOjSkEms3dOSkXxg7dR8kAW5K','W40CyG','y2XPzw50','CxvVDgvKtwvZC2fNzq','eghcMt0wWO1NsdhcJCk9WQ7cOG','Dw5KzwzPBMvK','pCoXW7hdIWBdNauY','WRrEAtFdOG'];F=function(){return y;};return F();}
