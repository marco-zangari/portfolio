'use strict';

page('/', app.projectView.initIndexPage);
page('/clickOnName', app.projectView.showProjects);
page('/projects', app.projectView.renderProjects);
page('/repos', app.repoView.index);
page();
