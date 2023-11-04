<script>
    const faq = [
      {
        q: "What exactly does the VS Prompt Customizer do?",
        a: `The Prompt Customizer is a prompt builder tool that lets you create prompts for AI, like Toby AI.`
      },
      {
        q: "What are the benefits of using VS Prompt Customizer?",
        a: `Coming up with prompts, which give a good result, can be hard. Often you have to try many different prompts before you find one that works. A prompt builder can help you with this process, by letting you quickly try out many different settings. Also, the prompts we provide are carefully curated, so you can be confident that they will give good results.`
      },
      {
        q: 'Which AI models are supported?',
        a: `While these prompts are designed for Toby AI, they can be used with any AI model.`
      }
    ]
</script>

<section class="join join-vertical w-full">
    <h2>FAQ</h2>
    {#each faq as {q, a}}
        <div class="collapse collapse-arrow join-item border border-base-300 bg-base-100">
            <input type="radio" name="my-accordion" />
            <div class="collapse-title text-xl font-medium">
                {q}
            </div>
            <div class="collapse-content">
                <p>{@html a}</p>
            </div>
        </div>
    {/each}
</section>
