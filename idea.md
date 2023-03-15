The latest version of Stimulus brought in a powerful way to add custom event listener (action) options. 

See https://stimulus.hotwired.dev/reference/actions#options

It would be amazing if the action option function allowed for access to the event.params on the element's action or alternatively the controller instance. Maybe even both of these. 

## Example usage - event.params

```
import { Application } from "@hotwired/stimulus"

const application = Application.start()

application.registerActionOption("open", ({ event }) => {
  if (event.type == "toggle") {
    return event.target.open == true
  } else {
    return true
  }
})
```

## Example usage - controller usage


## Implementation

https://github.com/hotwired/stimulus/blob/8a614c5f72b84c0a022172397b40bcd4348582e0/src/core/binding.ts#L59



