import {graphs} from './graph-data.mjs';
import {renderGraph,graphDetails} from './trace-renderer.mjs';
const icons=Object.fromEntries(['excel','sharepoint','salesforce','powerbi','databricks','function','logic','storage','dynamics','microsoft','chrome','devops'].map(x=>[x,'assets/'+x+'.svg']));
export const maps=Object.fromEntries(Object.entries(graphs).map(([slug,g])=>[slug,{
 intro:({'':'Sales, Excel policies, calculation and approval are separate responsibilities.',marketing:'Follow collection, consent, final selection and the return path.','crm-webhook':'SFMC sends the submission. Integration code owns the receiver and recovery.','authorized-queries':'Sign-in identifies the person. The application enforces their allowed records.',lineage:'A code release and a data refresh meet at the report.'})[slug],
 hint:'Select a system for its owner and handoff.',
 map:`<div class="trace-viewport" tabindex="0" aria-label="${g.title}. Scroll horizontally on a small screen.">${renderGraph(g,icons,'trace')}</div><details class="trace-detail"><summary>Systems, ownership and access</summary>${graphDetails(g)}</details>`
}]));
