<script>
    import Badge from '../lib/Badge.svelte';
    import Button from '../lib/Button.svelte';
    import ProgressBar from '../lib/ProgressBar.svelte';
    import CheckBox from '../lib/CheckBox.svelte';
    import Input from '../lib/Input.svelte';
    import RadioButton from '../lib/RadioButton.svelte';
    import Details from '../lib/Details.svelte';
</script>

<div class="container">
  <h1>Pluto 
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512"><path d="M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="160" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
  </h1>
  <p>Pluto is a webcomponent library written with <strong>Svelte</strong>.</p>
  <p>This is a Test page to showcase the different components.</p>
  <br>

  <h1>Components</h1>
  
  <div class="flex-container">
    <h2>Details</h2>
    <code>&lt;Details summary="Text"&gt;Some more Text&lt;/Details&gt;</code>
  </div>
  <p>Details allow to show further details for a specific topic.</p>
  <Details summary="Show me More"><p>This is some more content here.</p></Details>


  <div class="flex-container">
    <h2>Button</h2>
    <code>&lt;Button&gt;Click Me&lt;/Button&gt;</code>
  </div>
  <p>Buttons represent actions that are available to the user.</p>
  <Button>Click Me</Button>
  <div style="margin-top: 16px;">
    <Details summary="Variants">
      <p>Buttons can have different variants set:</p>
      <ul>
        <li>primary (Default)</li>
        <li>neutral</li>
        <li>success</li>
        <li>warning</li>
        <li>danger</li>
      </ul>
      <code>&lt;Button variant="success"&gt;Click Me&lt;/Button&gt;</code>
      <div class="flex-container" style="margin-top: 16px;">
        <div class="box" ><Button variant="success">Success</Button></div>
        <div class="box" ><Button variant="neutral">Neutral</Button></div>
        <div class="box" ><Button variant="warning">Warning</Button></div>
        <div class="box" ><Button variant="danger">Danger</Button></div>
      </div>
    </Details>
  </div>

  <div class="flex-container">
    <h2>Progress Bar</h2>
    <code>&lt;ProgressBar percentage={0.5} /&gt;</code>
  </div>
  <p>The ProgressBar allows to show the status of an ongoing operation, for example, loading further content.</p>
  <ProgressBar percentage={0.7} showText='Update In Progress...'/>
  <div class="box" style="margin-top: 16px;">
    <Details summary="Examples">
      <p>The progress bar can be customised in multiple ways:</p>
      <h4>percentage: number</h4>
      <p>The actual percentage of the current progress. Should be a number between 0 and 1.</p>
      <ProgressBar percentage={0.7}/>
      <h4>hideLabel: boolean</h4>
      <p>Hides the percentage label and only shows the progress bar.</p>
      <ProgressBar percentage={0.7} hideLabel/>
      <h4>steps: number (Default: 1)</h4>
      <p>Splits the progress bar into steps number of smaller pieces.</p>
      <ProgressBar percentage={0.7} steps={5}/>
      <h4>showText: string</h4>
      <p>Shows an extra Text next to the percentage, to give the user extra information. </p>
      <ProgressBar percentage={0.7} showText='Update In Progress...'/>
    </Details>
  </div>

  <div class="flex-container">
    <h2>Checkbox</h2>
    <code>&lt;CheckBox&gt;Check This Out&lt;/CheckBox&gt;</code>
  </div>
  <CheckBox>Check This Out</CheckBox>

  <div class="flex-container">
    <h2>Radio Button</h2>
    <code>&lt;RadioButton name="radio-group" id="1"&gt;Option&lt;/RadioButton&gt;</code>
  </div>
  <form action="">
    <RadioButton name="radio-group" id="1">First Option</RadioButton>
    <RadioButton name="radio-group" id="2">Second Option</RadioButton>
    <RadioButton name="radio-group" id="3">Third Option</RadioButton>
  </form>

  <div class="flex-container">
    <h2>Badges</h2>
    <code>&lt;Badge&gt;Primary&lt;/Badge&gt;</code>
  </div>
  <p>Badges are used to draw attention and display statuses or counts.</p>
  <Badge>Primary</Badge>
  <div style="margin-top: 16px;">
    <Details summary="Variants">
      <p>Badges can have different variants set:</p>
      <ul>
        <li>primary (Default)</li>
        <li>neutral</li>
        <li>success</li>
        <li>warning</li>
        <li>danger</li>
      </ul>
      <code>&lt;Badge variant="success"&gt;Success&lt;/Button&gt;</code>
      <div class="flex-container" style="margin-top: 16px;">
        <div class="box"><Badge variant="neutral">Neutral</Badge></div>
        <div class="box"><Badge variant="success">Success</Badge></div>
        <div class="box"><Badge variant="warning">Warning</Badge></div>
        <div class="box"><Badge variant="danger">Danger</Badge></div>
      </div>
    </Details>
  </div>

  <h2>Input</h2>
  <Input label="Normal Input Field"/>
  <Input label="Website" prefix="https://" placeholder="domain.com"/>
  <Input label="Email" suffix="@gmail.com" placeholder="Email"/>
  <Input label="Password:" labelPosition="left" inputType="password"/>


  <h2>WIP (Work In Progress)</h2>
  <p>This is a list of <strong>W</strong>ork <strong>I</strong>n <strong>P</strong>rogress components that are on the list to be added in the future:</p>
  <ul>
      <li>Card</li>
      <li>Details</li>
      <li>Switch</li>
      <li>Alert</li>
  </ul>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');

hr {
  margin: 64px 128px 0px 0px;
  height: 1px;
  background-color: rgb(156 163 175);
  border: none;
  width: 20vw;
}

.container {
  margin: 16px;
}

.flex-container {
  display: flex;
}

.box {
  margin-right: 4px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Nunito', sans-serif;
  margin-top: 32px;
}

p {
  font-family: 'Nunito', sans-serif;
  margin: 8px 0px;
}

li {
    font-family: 'Nunito', sans-serif; 
}

code {
  margin: 34px 8px 24px;
  background-color: rgb(243 244 246);
  padding: 6px;
  border-radius: 0.25rem;
}

</style>