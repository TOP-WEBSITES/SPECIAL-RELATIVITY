<template>
  <div class='chapter-container'>
    <h1>Applications</h1>
    <h1 style="font-size: 32px; font-weight: 200"><em>Dave Tan</em></h1><br>

    <p><strong>IN 1905,</strong> Albert Einstein proposed the following postulate, setting up the cornerstone for
      special relativity:<br />
      <span><em>"light is always propagated in empty space with a definite velocity [speed] c which is independent of
          the state of motion of the emitting body"</em></span>
    </p>

    <p>This suggests that the speed of light does not depend on the choice of reference frame. However, this contradicts
      the long-standing Galilean transformation in terms of viewing an object from another inertial frame. For instance,
      say there are two inertial frames, K and K’, with K’ moving at a velocity
      <span v-katex="'v'"></span> relative to K. Light which would be recorded at moving at velocity
      <span v-katex="'c'"></span> from frame K, through Galilean transforms would be calculated to be moving at
      speed
      <span v-katex="'c - v'"></span> in frame K’.
    </p>
    <p>From the aforementioned postulate, we may deduce that the wavefronts of the light observed in the two inertial
      frames must be described by the following:</p>

    <p>
      <span v-katex:display="' \\begin{cases} \
        \\Sigma^3_{j} x_j^2 - c^2t^2 = 0 \\\\     \
        \\Sigma^3_{j} {x\'}_j^2 - c^2{t\'}^2 = 0 \
      \\end{cases}'"></span>
    </p>

    <p>A new transformation which allows for the speed of light to remain constant must be found.</p>
    <h2 id="the-lorentz-transformation">The Lorentz Transformation</h2>
    <p>Enter the Lorentz transformation.</p>
    <p>Now, by using Lorentz transformation, we may see that with this new system, the postulates still hold, and the
      speed of light remains constant. In addition, we may also see that Galilean transformations can be approximated to
      hold.</p>
    <h2 id="spacetime-diagram">Spacetime Diagram</h2>

    <p>A spacetime diagram is a graphical tool of the properties of space and time, which allow for an intuitive
      qualitative understanding of certain special relative concepts. Points in a space time diagram represent an event,
      with a fixed position in time and space. Lines represent the history of an object’s location throughout all time,
      and is known as an object’s world line.</p>
    <p>Arguably, the most useful and most famous of these spacetime diagrams is known as the Minkowski diagram. First
      formulated by Hermann Minkowski in 1908, it is a 2-dimensional graph with one graph representing time and the
      other representing a singular dimension in space. </p>
    <p>The units are often chosen to be
      <span v-katex="'ct'"></span> against
      <span v-katex="'x'"></span>, this is so that the world line of an object moving at light speed along the space
      dimension would have a
      <span v-katex="'45 \\degree'"></span> angle to the axes.
    </p>

    <figure>
      <img src="@/assets/images/minkowski.png" alt="Minkowski Spacetime Diagram" style="width: 25vw; height: auto;" />
      <br>
      <figcaption aria-hidden="true">
        <h4>Minkowski Spacetime Diagram</h4>
      </figcaption>
    </figure>
    <br>

    <h2 id="lorentz-transformations-in-minkowski-diagram">Lorentz Transformations in Minkowski Diagram</h2>
    <p>The Lorentz Transformation makes it such that both the time axis and the x axis are shifted correspondingly
      "together" by a common angle</p>

    <p>This can be derived by setting
      <span v-katex="'x\' = 0 \\:\\&\\: ct\' = 0'"></span> on the
      <span v-katex="'x-ct'"></span> plane.
    </p>

    <p>
      <span v-katex:display="' \
      \\begin{aligned} \
        x\' &= \\gamma \\left(x - v t \\right) = 0 \\ \\implies ct = x \\frac{c}{v}\\\\ \
        ct\' &= \\gamma \\left(ct - \\frac{v x}{c} \\right) = 0 \\ \\implies ct = x \\frac{v}{c}\\\\ \
      \\end{aligned} \
      '"></span>
    </p>

    <p>So now we have the new axis lines that have the gradients
      <span v-katex="'\\frac{c}{v}'"></span> and
      <span v-katex="'\\frac{v}{c}'"></span>. In other words, the new axis has an angle
      <span v-katex="'\\theta = \\tan^{-1} \\frac{v}{c}'"></span> with respect to the old axis.
    </p>
    <p>On the Minkowski diagram, it shall look like this: </p>

    <figure>
      <img src="@/assets/images/lorentz_minkowski.png" alt="skewed minkowski diagram axes" />
      <br>
      <figcaption aria-hidden="true">
        <h4>Skewed axes of the Minkowski diagram</h4>
      </figcaption>
    </figure>
    <br>

    <h2 id="constancy-of-the-speed-of-light">Constancy of the Speed of Light</h2>

    <p>The speed of light is constant across all inertial frames, as we have previously learnt, and this principle can
      be demonstrated using a Minkowski diagram.</p>
    <p>As seen in the previous subsection, since both axes are "shifted" by a common angle, the
      <span v-katex="'45 \\degree'"></span> line, will also have the same gradient on the shifted axes. Hence, the
      gradient of the remaining the same, at
      <span v-katex="'45 \\degree'"></span>, and the speed of light
      <span v-katex="'\\tfrac{X\'}{cT\'}'"></span> is still the same. Thus, we conclude that the speed of light must
      remain the same at c, across all inertial frames.
    </p>
    <h2 id="causality-and-the-light-cone">Causality and the Light Cone</h2>
    <p>When we are dealing with events, there often arises this concept of causality; Did this event cause another or
      the other way around?</p>
    <p>Let say there exists two people, with one pulling a trigger to shoot a bullet being 1 event, while the person
      getting hit being another. It must be such that the former event must take place before the latter in all frames
      of references.</p>
    <p>From the Lorentz transformation for time,
      <span v-katex="'\\Delta t\' = \\gamma_v \\left( \\Delta t - \\frac{u \\Delta x}{c^2} \\right)'"></span>.
      Hence, for an observer in another inertial frame, it is only possible for them to view the events in the reverse
      order if the world line between these two events travels slower than light, i.e.
      <span v-katex="'\\Delta t < 0, \\ \\frac{u}{c} > \\frac{c \\Delta t}{\\Delta x} '"></span>.
    </p>
    <p>This is basically saying that if there are two events separated by a distance in space and time, such that light
      does not have enough time to travel between them, then there is an observer who sees them in the reverse order.
      And, for two such events, it is impossible for them to effect each other (can be understood intuitively as
      information may not travel faster than light).</p>
    <p>This concept may also be represented in a Minkowski diagram, and creating something known as a "light cone", by
      setting one event at the origin.</p>

    <figure>
      <img src="@/assets/images/lightcone.png"
        alt="Minkowski Diagram showing a light cone, within each light cone are objects which could affect the event at origin, and vice versa"
        style="width: 30vw; height: auto;" />
      <figcaption aria-hidden="true">
        <h4>Minkowski Diagram showing a light cone, within each light cone are objects which could affect the event at
          origin, and vice versa</h4>
      </figcaption>
    </figure>
    <br>

    <h2 id="four-vector">Four-Vector</h2>
    <p>Now, allow us to consider two events separated by space and time, in system K.</p>

    <p>
      <span v-katex:display="' \
      \\begin{split} \
      \\Delta x_i &= x_{\\text{(i, event 1)}} - x_{\\text{(i, event 2)}} \\\\ \
      \\Delta t &= t_{\\text{(event 1)}} - t_{\\text{(event 2)}} \
      \\end{split} \
      '"></span>
    </p>

    <p>We may denote the difference in space time between these two events by
      <span v-katex="'s^2'"></span>, and this is defined in the four-displacement equation:
    </p>

    <p>
      <span v-katex:display="'ds^2 = dx^2 + dy^2 + dz^2 - c^2 dt^2 = dx\'^2 + dy\'^2 + dz\'^2 - c^2 dt\'^2'"></span>
    </p>
    <p>Notice that
      <span v-katex="'ds'"></span> is invariant with observer frame. In other words, it is constant. This suggests
      that adding time as a fourth dimension to the three position dimensions, could prove useful.
    </p>
    <p>Let us substitute
      <span v-katex="'ict'"></span> as
      <span v-katex="'x_0'"></span>. This has little true physical significance, and only serves to help us as a
      mathematical manipulation, to aid in computations.
    </p>
    <p>Then,</p>

    <p>
      <span v-katex:display="
      '\\underrightarrow{r} = \\begin{pmatrix}' +
             'ict \\\\' + 
             'x_{1} \\\\' +
             'x_{2} \\\\' + 
             'x_{3} \\\\' +
           '\\end{pmatrix}'
      "></span>
    </p>

    <p>Notice that equation may be greatly simplified as follows:</p>

    <p>
      <span v-katex:display="' \\begin{cases} \
        \\underrightarrow{r} \\cdot \\underrightarrow{r} = \\sum\\limits^3_{j=0} x_j^2 = 0\\\\ \
        \\underrightarrow{r\'} \\cdot \\underrightarrow{r\'} =  \\sum\\limits^3_{j=0} {x\'}_j^2 = 0 \
      \\end{cases}'"></span>
    </p>

    <h2 id="four-momentum">Four-Momentum</h2>
    <p>Upon learning of the four-position vector, one may start to ponder upon what other four-vectors are possible.</p>
    <h3 id="four-velocity">Four-Velocity</h3>
    <p>First, let us consider another possible four-vector, velocity.</p>
    <p>Let
      <span v-katex="'\\underrightarrow{u}'"></span> be the four-velocity vector for any point on the world line
      <span v-katex="'r(\\tau)'"></span>.
      <span v-katex="'\\underrightarrow{u}'"></span> is defined as
      <span v-katex="'\\frac{d r(\\tau)}{d t}'"></span>, where
      <span v-katex="'\\tau'"></span> is the proper time, i.e. the time experienced by a clock at that reference
      time,
      <span v-katex="'\\tau = \\frac{1}{\\sqrt{1- \\frac{v^2}{c^2}}}'"></span>
    </p>

    <p>Following this definition, we see that </p>
    <p>
      <span v-katex:display="' \\underrightarrow{u} = \\begin{pmatrix}' +
        '\\tau c \\\\' +
        '\\tau u_{1} \\\\' +
        '\\tau u_{2} \\\\' +
        '\\tau u_{3} \\\\' +
      '\\end{pmatrix} '"></span>
    </p>

    <h2 id="derivation-of-four-momentum">Derivation of Four-Momentum</h2>
    <p>For any particle with mass, its four-momentum may simply be derived by multiplying the four velocity by its rest
      mass.</p>

    <p>
      <span v-katex:display="'\\underrightarrow{p} = \\begin{pmatrix}' +
        '\\tau mc  \\\\ ' +
        '\\tau mu_{1} \\\\ ' +
        '\\tau mu_{2} \\\\ ' +
        '\\tau mu_{3} ' +
      '\\end{pmatrix} ' +
      '= \\begin{pmatrix}' +
        '\\frac{E}{c} \\\\' + 
        'p_{1} \\\\' +
        'p_{2} \\\\' +
        'p_{3}' +
      '\\end{pmatrix}'"></span>
    </p>

    <h3 id="compton-scattering-formula-derivation">Compton Scattering Formula Derivation</h3>
    <p>Firstly, we must note that four-momentum is a conserved quantity.</p>

    <div v-katex:display="' \
    \\begin{aligned}  \
        \\underrightarrow{p}_{before} &= \\underrightarrow{p}_{after} &\\\\  \
     \\underrightarrow{p}_\\gamma + \\underrightarrow{p}_e &= \\underrightarrow{p}_\\gamma\' + \\underrightarrow{p}_e\' &\\\\ \
    \\underrightarrow{p}_\\gamma - \\underrightarrow{p}_\\gamma\' &= \\underrightarrow{p}_e\' - \\underrightarrow{p}_e &\\\\ \
    \\underrightarrow{p}_\\gamma^2 - 2\\underrightarrow{p}_\\gamma\\underrightarrow{p}_\\gamma\' + \\underrightarrow{p}_\\gamma\'^2 &= \\underrightarrow{p}_e\'^2 -2\\underrightarrow{p}_e\'\\underrightarrow{p}_e + \\underrightarrow{p}_e^2 &\\text{, by squaring both sides}\\\\ \
    -2\\underrightarrow{p}_\\gamma\\underrightarrow{p}_\\gamma\' &= 2m_e^2c^2 - 2\\underrightarrow{p}_e\'\\underrightarrow{p}_e & \\text{, as } \\underrightarrow{p}_\\gamma^2 + \\underrightarrow{p}_\\gamma\'^2 =  \\underrightarrow{p}_e\'^2 + \\underrightarrow{p}_e^2  \\\\ \
    \\underrightarrow{p}_\\gamma\\underrightarrow{p}_\\gamma\' &=  \\underrightarrow{p}_e\'\\underrightarrow{p}_e - m_e^2c^2& \\\\ \
    \\frac{E_\\gamma E_\\gamma\'}{c^2} - \\underrightarrow{p}_\\gamma \\underrightarrow{p}_\\gamma\' &=  \\frac{E_e\'}{c} m_e c - m_e^2c^2 &\\\\ \
    \\frac{E_\\gamma E_\\gamma\'}{c^2} - |\\underrightarrow{p}_\\gamma| |\\underrightarrow{p}_\\gamma\'| \\cos \\theta &=  E_e\' m_e - m_e^2c^2&\\\\ \
    \\frac{E_\\gamma E_\\gamma\'}{c^2}  (1 - \\cos \\theta) &=  E_e\' m_e - m_e^2c^2&\\text{, from the conservation of energy}\\\\ \
    \\frac{E_\\gamma E_\\gamma\'}{c^2}  (1 - \\cos \\theta) &=  (E_\\gamma + E_e - E_\\gamma\') m_e - m_e^2c^2  & \\\\ \
    &= E_\\gamma - E_\\gamma\' &\\end{aligned} \
    '" style="width: 50vw;"></div>

    <p>This may be simplified to form our familiar Compton scattering formula
      <span v-katex="'\\Delta \\lambda = \\frac{h}{mc} (1- \\cos \\theta)'"></span>, by multiplying by
      <span v-katex="'\\lambda_0 \\lambda_1'"></span> and dividing by
      <span v-katex="'hc'"></span>, among other steps.
    </p>

    <p style="text-align: right;"> (931 words) </p>

    <h2 id="further-reading">Further Reading</h2>
    <ul>
      <li>Classical Dynamics of Particles and Systems by Marion and Thornton</li>
      <li>14. Introduction to the Four-Vector - Fundamentals of Physics with Ramamurti Shankar - Yale University</li>
      <li>Wikipedia, Four-vector pages and pages linked within</li>
    </ul>
    <NextChapter prev-chapter="introduction" next-chapter="paradoxes" />
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

ul {
  font-size: 18px;
  margin-bottom: 24px;
  list-style-position: inside;
}
</style>
