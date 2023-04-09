<script>
    import Badges from '../lib/Badges.svelte';
    import Button from '../lib/Button.svelte';
    import ProgressBar from '../lib/ProgressBar.svelte';
    import CheckBox from '../lib/CheckBox.svelte';
</script>
<h1>Pluto</h1>
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


</style>