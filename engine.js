(function(root){
 const valid=(a,n)=>Array.isArray(a)&&a.length===n&&a.every(x=>Number.isInteger(x)&&x>=0&&x<3);
 function score(questions,answers){return questions.reduce((n,q,i)=>n+(answers[i]===q.answer?1:0),0);}
 function passed(questions,answers){return valid(answers,questions.length)&&score(questions,answers)>=7;}
 function shuffle(values,random=Math.random){const a=[...values];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 function restore(value,questions){try{const s=JSON.parse(value);if(s.version!==1||!Array.isArray(s.answers)||s.answers.length>questions.length||!s.answers.every(x=>Number.isInteger(x)&&x>=0&&x<3))return null;if(!Array.isArray(s.orders)||s.orders.length!==questions.length||!s.orders.every(a=>a.length===3&&[...a].sort().join()==='0,1,2'))return null;return {version:1,answers:s.answers,orders:s.orders,index:Math.min(s.answers.length,9),attempt:Number.isInteger(s.attempt)&&s.attempt>0?s.attempt:1};}catch{return null;}}
 const api={score,passed,shuffle,restore};if(typeof module!=='undefined')module.exports=api;else root.QuizEngine=api;
})(typeof window!=='undefined'?window:this);
