<!-- Output copied to clipboard! -->

<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.277 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β33
* Tue Sep 13 2022 07:13:09 GMT-0700 (PDT)
* Source doc: Dont Export Your PK
* This is a partial selection. Check to make sure intra-doc links work.

WARNING:
You have 2 H1 headings. You may want to use the "H1 -> H2" option to demote all headings by one level.

----->






# Don’t Export You PK


### A simple dev utility accompanied with a webapp to enable executing transactions without having to export your pk from the wallet


# Installation

```

npm install dont-export-your-pk

```


# Usage

Pass in the appropriate arguments to the function:

```generateExecutionUrl( contractAbi: string, functionName: string, functionArguments: string[], to: string, from: string,  chainId: any, value?: any)```

The function will output a link of the form [https://dontexportyourpk.netlify.app](https://dontexportyourpk.netlify.app) followed by the txdata of your transaction in query parameters.

Next, click the link and connect your metamask to the webapp, connect your account and click “Send Transaction”. 
