## Common Alerts widget
Alerts are created with the pre-set types according style guide. 
The benefit of using this common widget is you don't need to worry about what styles need to
apply to your Alert, and we can enforce the style guide in a central place. Also easy to change
in case style guide is modified in the future.

When Alert is applied, it will appear on top of the table and once it is closed, The tags will reappear.

### Usage
app-cs-alert component accepts the following input parameters:
~~~
  bindings: {
    messages: ['@'], // An array of strings with a brief description for the alert
    closeAlert: '&?', //Optional: Callback when alert is closed
  }
~~~
~~~

<app-cs-alert [messages]="alertsMessages" (closeAlert)="alertClosed()"></app-cs-alert>

~~~

These can also be closed manually by clicking on the close button on the alert.
