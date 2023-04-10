<script>
    import Badges from '../lib/Badge.svelte';
    import Button from '../lib/Button.svelte';
    import ProgressBar from '../lib/ProgressBar.svelte';
    import CheckBox from '../lib/CheckBox.svelte';
    import Input from '../lib/Input.svelte';
</script>
<h1>Pluto 
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512"><path d="M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="160" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
</h1>
<p>Pluto is a webcomponent library written with <strong>Svelte</strong>.</p>
<p>This is a Test page to showcase the different components:</p>
<br>
<h2>Button</h2>
<Button></Button>
<h2>Progress Bar</h2>
<ProgressBar percentage={0.7} showText='Update In Progress...'/>
<h2>Checkbox</h2>
<CheckBox>Check This Out</CheckBox>

<h2>Badges</h2>
<Badges>Primary</Badges>
<Badges variant="neutral">Neutral</Badges>
<Badges variant="success">Success</Badges>
<Badges variant="warning">Warning</Badges>
<Badges variant="danger">Danger</Badges>

<h2>Input</h2>
<Input label="Normal Input Field"/>
<Input label="Website" prefix="https://" placeholder="domain.com"/>
<Input label="Email" suffix="@gmail.com" placeholder="Email"/>
<Input label="Password:" labelPosition="left" inputType="password"/>
<h2>In Progress</h2>
<ul>
    <li>Input</li>
    <li>Card</li>
    <li>Details</li>
    <li>Radio Button</li>
    <li>Switch</li>
</ul>


<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');

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


</style>