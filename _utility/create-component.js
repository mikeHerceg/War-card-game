require('colors');
const fs = require('fs');
const strHelper = require('./stringHelpers');
const components = require('./templates/component');
const stories = require('./templates/stories');


const componentName = process.argv[2];

if (!componentName) {
  console.error('Please supply a valid component name'.red);
  process.exit(1);
}

const kebabCase = strHelper.kebabCase(componentName);
const paschalCase = strHelper.paschalCase(componentName);
const titleCase = strHelper.titleCase(componentName);


console.log(`Creating Component Templates with name: ${paschalCase}`);

// build Component Directory
const componentDirectory = `./src/components/${kebabCase}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${paschalCase} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);


const generatedComponents = components.map(component =>
  component(kebabCase, paschalCase),
);

generatedComponents.forEach((component) => {
  fs.writeFileSync(
    `${componentDirectory}/${kebabCase}${component.extension}`,
    component.content,
  );
});

// build stories
const storyDirectory = `./src/components/${kebabCase}/stories/`;

fs.mkdirSync(storyDirectory);

const generatedStories = stories.map(story =>
  story(kebabCase, paschalCase, titleCase),
);

generatedStories.forEach((story) => {
  fs.writeFileSync(
    `${storyDirectory}/${kebabCase}${story.extension}`,
    story.content,
  );
});


// add index file
fs.writeFile(
  `${componentDirectory}/index.tsx`,
  `export * from './${kebabCase}.component';`,
  (err) => {
    if (err) console.log('error', err);
  },
);


console.log(
  `Successfully created component under: ${componentDirectory.green}`,
);
