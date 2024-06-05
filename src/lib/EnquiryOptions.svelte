<script>
  import Toggle from "./Toggle.svelte";
  let radioValue;
  const options = [
    {
      value: "General Enquiry",
      label: "General Enquiry",
    },
    {
      value: "  Support Request",
      label: "Support Request",
    }
];
</script>

<div class="queryOptions">
  <p>Query Type</p>
  <p class="queryOptionList">Please select a query type</p>
  <div class="queryBtns">
    <Toggle
      {options}
      fontSize={16}
      legend="Select a starter Pokemon"
      bind:userSelected={radioValue}
    />
  </div>
</div>
