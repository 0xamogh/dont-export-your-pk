<!-- Output copied to clipboard! -->

<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.293 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β33
* Tue Sep 13 2022 07:11:57 GMT-0700 (PDT)
* Source doc: Dont Export Your PK
* This is a partial selection. Check to make sure intra-doc links work.

WARNING:
You have 2 H1 headings. You may want to use the "H1 -> H2" option to demote all headings by one level.

----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 1; ALERTS: 0.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p>
<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



# Don’t Export You PK


## A simple dev utility accompanied with a webapp to enable executing transactions without having to export your pk from the wallet


# Installation

```

npm install dont-export-your-pk

```


# Usage

Pass in the appropriate arguments to the function:

```generateExecutionUrl( contractAbi: string, functionName: string, functionArguments: string[], to: string, from: string,  chainId: any, value?: any)```

The function will output a link of the form [https://dontexportyourpk.netlify.app](https://dontexportyourpk.netlify.app) followed by the txdata of your transaction in query parameters.

Next, click the link and connect your metamask to the webapp, connect your account and click “Send Transaction”. 
