import React from 'react';
import {Link} from 'react-router';

const FAQ = ()=>{
  return 	(<section className="grey lighten-4 padding-bottom-medium padding-top-medium">
		<div className="container ">
			<div className="row">
				<div className="col s12 center">
					<h2>Frequently Asqued Questions</h2>
				</div>
			</div>
			<div className="row">
				<div className="col s12">
					  <ul className="collapsible popout" data-collapsible="accordion">
					    <li>
					      <div className="collapsible-header">Q1. In which language are your training and conferences given? </div>
					      <div className="collapsible-body"><p>They are always given in English.</p></div>
					    </li>
					    <li>
					      <div className="collapsible-header">Q2. Where do the events, workshops and bootcamps take place? </div>
					      <div className="collapsible-body"><p>The bootcamp is taking place in our lab, which is located in Brussels, Belgium.
						  <br/><br/>Most of ours events and workshops are happening in Belgium, but not especially in Brussels.
						  <br/><br/>Due to its small size and its central location, Belgium is very accessible from anywhere in Europe. Only an hour and a half away from Paris or Amsterdam by train, Brussels hosts a huge expat community and a growing tech and stratup ecosystem.</p></div>
					    </li>
					    <li>
					      <div className="collapsible-header">Q3. For whom is Philos' conferences and events? </div>
					      <div className="collapsible-body"><p>The events organized by Philos target an audience of developers. However, even if you are not a developer, you are more than welcome to attend them. We sometimes find IT project managers or CEOs attending our events as they want to keep up to date with the latest technologies and trends and get the pulse directly from developers on those topics. 
						  Workshops are more selective, as it is exclusively for developers. As for the intensive training, each participant has to go through an admission process before he or she can attend the workshop. For more details, check the next two questions.</p></div>
					    </li>
					    <li>
					      <div className="collapsible-header">Q4. For whom is Philos' intensive program?</div>
					      <div className="collapsible-body"><p>Philos’ intensive training is aimed at developers, whether you are a freelancer or part of a company, it doesn’t matter. All participants should master at least one language other than JavaScript (Java, PHP, C#, C++, Python, Scala, Go ...). Each candidate go through an admission process. This process allows us to determine if you have the necessary skills to attend the intensive training. It also helps us group cohorts according to their level, which improves both productivity and the learning experience of each participant.</p></div>
					    </li>
					    <li>
					      <div className="collapsible-header">Q5. How does the admission process work?</div>
					      <div className="collapsible-body"><p><span className="bold-5">Registration:</span> You register online on the <Link to="https://admission.philos.io" className="philos-orange">admission page</Link>. 
							<br/><span className="bold-5">In person Interview:</span> In the application form, we’ll ask you to pick a date at which you’re available for an in-person interview. During the interview, we assess your level which will in turn help us to determine if you’re eligible for the intensive training and if your skills matches those of the other participants. 
							<br/><span className="bold-5">Decision:</span> We deliver an admissions decision to you, and talk about next-steps.</p></div>
					    </li>
            </ul>
				</div>
			</div>
		</div>
	</section>);
}

export default FAQ;
