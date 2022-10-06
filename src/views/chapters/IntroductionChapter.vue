<template>
  <div class='chapter-container'>
    <h1>Introduction</h1>
    <h1 style="font-size: 32px;font-weight: 200"><em>Mayukh Das</em></h1> <br>
    <p><strong>Physics</strong> is perhaps one of the most varied of all scientific disciplines, with a wide variety of
      topics that lie beneath the surface. One of the most prominent of topics (and perhaps interesting) is the theory
      of relativity.</p>

    <p>One of the most poignant of reasons as to why relativity is so special is the fact that the theory is developed
      only from two postulates.</p>

    <p>Einstein, the developer of Special Relativity, lists these postulates as follows.</p>

    <ol type="I">
      <li>The laws of physics take the same form in all inertial frames of reference.</li>
      <li>The speed of light in free space has the same value <em>c</em> in all inertial frames of reference.</li>
    </ol>

    <p>However, in order to first understand why Einstein came up with these two postulates, we must first understand
      the experimental background.</p>
    <h2 id="experimental-background">Experimental Background</h2>
    <p>Before the theory of relativity, an alternative hypothesis was upheld.</p>
    <p>
      Subsquent to Maxwell postulating theoeretically and Hertz proving experimentally that light was indeed an
      electromagnetic wave, researchers went on to find how light propagated through space. The most prevalent of
      theories was that of a
      luminiferous aether, a mysterious substance that permeated space (sounds familiar to a certain dark matter), that
      mediated in the transmission of light, or electromagnetic waves. However, there was no experimental backing to
      this idea,
      and there was nothing but a glorified hunch that prompted theorists to believe in this.
    </p>
    <p>This paved the way for Michelson and Morley to develop an experimental set-up to demonstrate the existence of the
      aether.</p>
    <figure>
      <img src="@/assets/images/Michelson_setup.png" id="fig:exp1" alt="Sketch of the Michelson-Morley Experiment" />
      <figcaption aria-hidden="true">
        <h4> Sketch of the Michelson-Morley Experiment</h4>
      </figcaption>
    </figure>
    <br>
    <p>
      The experiment took place on a table that was spun. A ray of light was shone from one side to another, and was
      reflected through the mirror. This was done to determine the speed of light in perpendicular directions, and
      detect if there
      was any change, due to the relative speed to the aether wind, that was believed to affect the speed of light. This
      is similar to how wind can distort the propogation of sound, and how it is difficult to hear someone when it is
      very
      windy.
    </p>
    <p>
      However, despite the preconceived notion of an omnipresent aether, the experiment yielded a famous <em>null</em>
      result, showing conclusively that light speed in a particular medium is constant, and that there is no evidence
      that aether
      permeated the environment. Thus the speed of light in free space, within experimental error, was indeed
      independent of observer velocity, and constant throughout the universe.
    </p>
    <p>This was why Einstein posited the above postulate of the speed of light in a vacuum being independent (or rather
      invariant) with the observer.</p>
    <p>Now, with the experimental backing let us try to understand the implications of the speed of light being
      invariant with observer. Thus, let us analyze the different frames that one may percive the passage of light.</p>
    <p>
      We now have two frames, the stationary frame, and frame perceived by an observer travelling at a given speed with
      respect to the stationary observer. Let the 3-dimensional position and time perceived by the stationary frame to
      be
      <span v-katex="'x, y, z, t'"></span>, and the non-stationary observer frame to be
      <span v-katex="'x\', y\', z\', t\''"></span> respectively. We further
      assume the non-stationary observer is travelling in the
      <span v-katex="'x'"></span>-direction.
    </p>
    <p>
      Note that the difference of the distance travelled by an object and light during an infinitesimally small amount
      of time,
      <span v-katex="'dt'"></span>, is invariant with the speed of the observer. Let the
      difference be denoted by
      <span v-katex="'ds'"></span>.
    </p>
    <p>
      <span v-katex:display="'ds^2 = dx^2 + dy^2 + dz^2 - c^2 dt^2 = dx\'^2 + dy\'^2 + dz\'^2 - c^2 dt\'^2'"></span>
    </p>
    <p>This is the famous four-displacement equation, that is the backbone of Special Relativity.</p>

    <h2 id="derivation-of-lorentz-transformations">Derivation of Lorentz Transformations</h2>

    <p>Certainly one of the most ubiquitous tools in Special Relativity is that of the Lorentz Transformations, which
      essentially dictate the perceived changes in space-time as an once switches observer frames.</p>
    <p>We shall now derive this transformation using one of many methods, that is using hyperbolic functions.</p>
    <p>
      We understand that the observer is moving in the x-direction, so we can remove the
      <span v-katex="'y \\:\\&\\: z'"></span> terms from the four-displacement equation, as there will be
      no transformations in these dimensions.
    </p>
    <p>
      <span v-katex:display="'(ct)^2 - x^2 = (ct\')^2 - x\'^2'"></span>
    </p>
    <p>
      The general solution of such a hyperbolic equation can be obtained by plugging in hyperbolic functions into
      <span v-katex="'x \\:\\&\\: ct'"></span> variables.
    </p>
    <p>
      <span
        v-katex:display="'x = x\' \\cosh \\Phi + ct\' \\sinh \\Phi, \\quad ct = x\' \\sinh \\Phi + ct\' \\cosh \\Phi'"></span>
    </p>
    <p>
      Now, we take
      <span v-katex="'x\' = 0'"></span> as a special case and work from there.
    </p>
    <p>
      <span v-katex:display="'x = ct\' \\sinh \\Phi, \\quad ct = ct\' \\cosh \\Phi '"></span>
    </p>
    <p>Now we divide the left equation by the right equation.</p>

    <p>
      <span
        v-katex:display="'\\frac{x}{ct} = \\tanh \\Phi = \\frac{v}{c} = \\beta \\ \\text{where } \\ \\beta := \\frac{v}{c}'"></span>
    </p>
    <p>
      Now, using hyperbolic identities,
    </p>
    <p>
      <span v-katex:display="'1 = \\tanh ^2 \\Phi + \\frac{1}{\\cosh ^2 \\Phi}'"></span>
      <span
        v-katex:display="'\\implies \\cosh \\Phi = \\frac{1}{\\sqrt{1 - \\tanh ^2 \\Phi}}  = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}'"></span>
      <span
        v-katex:display="'\\implies \\sinh \\Phi = \\sqrt{\\cosh ^2 \\Phi - 1} = \\frac{\\frac{v}{c}}{\\sqrt{1 - \\frac{v^2}{c^2}}}'"></span>
    </p>
    <p>Now we substitute everything back into the initial solution,</p>
    <p>
      <span
        v-katex:display="'x = \\frac{x\' + vt\'}{\\sqrt{1 - \\frac{v^2}{c^2}}}, \\quad t = \\frac{t\' + \\tfrac{v x\'}{c^2}}{\\sqrt{1 - \\frac{v^2}{c^2}}}'"></span>
    </p>
    <p>
      We find the term
      <span v-katex="'\\left(1 - \\frac{v^2}{c^2}\\right)^{-0.5}'"></span> being repeated quite often, so let us
      substitute with the constant
      <span v-katex="'\\gamma_v'"></span>.
    </p>
    <p>
      <span
        v-katex:display="'x = \\gamma_v (x\' + vt\'), \\quad t = \\gamma_v \\left(t\' + \\tfrac{v x\'}{c^2}\\right)'"></span>
    </p>
    <p>We have thus proved the Lorentz Transformations. QED</p>
    <h2 id="physical-signifance-of-the-lorentz-transformations">Physical Signifance of the Lorentz Transformations</h2>
    <p>
      We have completed the math section of our article (yay!), but we still need to intimately understand what are we
      talking about. After all, this is Physics not pure Maths. As a wise man (certainly not a teacher in our school)
      once said -
      Math is Physics without meaning, and Chemistry is Physics without thinking. And Biology, well let’s not get into
      that.
    </p>
    <p>
      With just the Lorentz Transformations and Four-Displacement equation alone, one can conjure up a plethora of
      visulations and paradoxes that will be quite interesting, and the other fellows will go through these in the
      subsequent articles.
    </p>
    <p>However, there are a few key takeaways from these transformations that I wish to briefly touch upon.</p>
    <p>Firstly, is the fact that there is no commonly agreed upon length between observers. What do I mean by this.</p>
    <p>
      Well, we have shown the aforementioned Lorentz transformations yields the following equation (take
      <span v-katex="'t = 0'"></span>).
    </p>
    <p>
      <span v-katex:display="'x = \\gamma_v x\''"></span>
    </p>
    <p>
      We know that
      <span v-katex="'\\gamma_v > 1'"></span> , if
      <span v-katex="'v \\ne 0'"></span>. So now suddenly we have any length or distance unusually ‘contracting’
      when one attains a non-zero speed along the axis of that distance.
    </p>
    <p>
      Conversely, we have from the other equation (take
      <span v-katex="'x = 0'"></span>) -
    </p>
    <p>
      <span v-katex:display="'t = \\gamma_v t\''"></span>
    </p>
    <p>Huh! Not just the length is contracting, but the passage of time also slows down.</p>
    <p>This seems very counterintuitive, but fret not! These two are actually very real phenomena that we experience
      daily. However, we are travelling at a way too low speed to even perceive or notice these changes.</p>
    <p>
      Usually physicists set an arbitrary threshold of ~
      <span v-katex="'10^6 \\: m/s'"></span> when we should take these changes into account. For the uninitiated,
      this is in the order of megametres per second! We can only hope to
      dream one day of travelling such a speed!
    </p>
    <h2 id="conclusion">Conclusion</h2>
    <p>In short, we have concisely discussed the quirky phenomena of Special Relativity, and how it may result in a very
      deep-seated change in our understanding our physical environment.</p>
    <p>I hope you have enjoyed reading this article.</p>

    <p style='text-align: right;'> (1032 words) </p>

    <NextChapter next-chapter="applications" />
  </div>
</template>

<script setup lang="ts">
import NextChapter from '@/components/NextChapter.vue';

</script>

<style lang='scss' scoped>
h1 {
  font-family: Porto;
  font-size: 64px;
  font-weight: 400;
  color: #2D3D27;
  margin-bottom: -5px;
}

h2 {
  font-size: 24px;
  font-weight: 800;
  color: #2B3B25;
  margin-bottom: 24px;
}

p {
  font-size: 18px;
  margin-bottom: 24px;
}

p strong {
  font-family: Porto;
  font-size: 32px;
  font-weight: 400;
  color: #2D3D27;
}

ol {
  font-size: 18px;
  margin-bottom: 24px;
  list-style-position: inside;
}
</style>
