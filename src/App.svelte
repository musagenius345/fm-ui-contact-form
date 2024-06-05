<script>
  import EnquiryOptions from "./lib/EnquiryOptions.svelte";

</script>
<div class="container">
  <h1>Contact Us</h1>
  <form>
    <div class="names rowFlex">
      <label for="firstName">First Name
      <input type="text" name="firstName" id="firstName" />
      <p hidden>This field is required</p>
    </label>
      
      <label for="lastName">Last Name
      <input type="text" name="lastName" id="lastName" />
      <p hidden>This field is required</p>
    </label>
     
    </div>

    <label for="email">Email Address</label>
    <input type="email" name="email" id="email" class="email" />
    <p class="invalidEmailWarning" hidden>Please enter a valid email address</p>

   <!-- <div class="" style="display: contents;"> -->
    <EnquiryOptions></EnquiryOptions>
   <!-- </div> -->
    

    <div class="messageInput colFlex">
      <label for="message"
        >Message
        <input type="text" name="message"/>
      </label>
      <p hidden>This field is required</p>
    </div>

    <label for="consentContact" class="consentLabel">
      <input type="checkbox" name="consentContact" id="consentContact" />
      I consent to being contacted by the team
    </label>
    <div hidden class="consentWarning">
      <p>To submit this form, please consent to being contacted</p>
    </div>

    <button type="submit" popovertarget="submissionPopover">Submit</button>
  </form>
</div>

<div id="submissionPopover" popover>
  Message Sent! Thanks for completing the form. We'll be in touch soon!
</div>

<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge"
    >Frontend Mentor</a
  >. Coded by <a href="#">Your Name Here</a>.
</div>

<!-- Feel free to remove these styles or customize in your own stylesheet 👍 -->
<style>
  form {
    display: flex;
    flex-direction: column;
  }
  .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: hsl(228, 45%, 44%);
  }
</style>
