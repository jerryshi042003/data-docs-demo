// Pure simulation contracts. Every record and policy in this module is fictional.
export function commission({paid=240,components=30,games=6,product='plan',hold=false,matched=true}={}) {
  if (![paid,components,games].every(Number.isFinite)||paid<0||paid>600||components<0||components>paid||games<1||games>12) return {error:'Enter a payment from $30 to $600 for this fixed $30 deduction example.'};
  const paidCents=Math.round(paid*100), feeCents=Math.round(components*100);
  const rate=matched?(games>=6?8:4):0;
  const basis=paidCents-feeCents, calculated=Math.round(basis*rate/100);
  return {rate,basis,calculated,payable:hold?0:calculated,period:product==='group'?'October':'August',date:product==='group'?'Oct 6':'Aug 5',unpaid:60000-paidCents};
}
export function audience({transfer=true,reconciled=false,returned=false,applied=false}={}) {
  return {source:1200,delta:35,destination:transfer?(reconciled?1200:1212):1177,missing:transfer?(reconciled?0:2):37,retained:!transfer||!reconciled?14:0,withdrawals:returned?3:0,nextEligible:1200-(returned&&applied?3:0),ready:transfer&&reconciled&&(!returned||applied)};
}
export function receive(state,action) {
  const next={...state};
  if(action==='invalid'){next.attempts++;next.message='Rejected before persistence: the signature does not match.';return next;}
  if(action==='send'){next.attempts++;if(!next.receipt){next.receipt='RECEIPT-DEMO-01';next.opportunities=1;next.notified=false;next.message='CRM saved. Notification failed; the saved record remains.';}else next.message='Existing receipt found. No second CRM record created.';return next;}
  if(action==='notify'){if(!next.receipt){next.message='Save the submission before retrying its notification.';}else{next.notified=true;next.message='Notification delivered for the existing CRM record.';}return next;}
  return {attempts:0,receipt:null,opportunities:0,notified:false,message:'One submission is ready. Nothing has been sent.'};
}
export function authorize({role='rep',question='own',team='harbor',available=true}={}) {
  if(team!=='harbor') return {allowed:false,reason:'The requested franchise is outside this signed-in identity’s scope.',sql:'No query executed.'};
  if(question==='ambiguous') return {allowed:false,reason:'“We” and “doing” need a team, metric, and period before a query can run.',sql:'No query executed.'};
  if(role==='rep'&&question==='team') return {allowed:false,reason:'A sales representative may read their own results. Team totals require the manager role.',sql:'No query executed.'};
  const sql=question==='own'?"SELECT SUM(collected_amount)\nFROM demo.sales\nWHERE franchise = 'harbor'\n  AND rep_id = 'casey-demo';":"SELECT SUM(collected_amount)\nFROM demo.sales\nWHERE franchise = 'harbor';";
  if(!available)return {allowed:true,unavailable:true,reason:'Scope is allowed, but the governed dataset is unavailable. No answer is fabricated.',sql};
  return {allowed:true,reason:question==='own'?'Casey’s collected revenue is $12,400.':'Harbor’s collected revenue is $48,600.',value:question==='own'?12400:48600,sql};
}
export function lineage(scenario='current') {
  const states={current:{build:'r12',deployed:'r12',source:'Oct 20',gold:'Oct 20',model:'Oct 20',report:1200},build:{build:'r13',deployed:'r12',source:'Oct 20',gold:'Oct 20',model:'Oct 20',report:1200},source:{build:'r12',deployed:'r12',source:'Oct 19',gold:'Oct 19',model:'Oct 19',report:1184},model:{build:'r12',deployed:'r12',source:'Oct 20',gold:'Oct 20',model:'Oct 19',report:1184}};
  return states[scenario]||states.current;
}
