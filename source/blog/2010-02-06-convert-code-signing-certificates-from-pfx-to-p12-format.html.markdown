---
title: Convert code signing certificates from "pfx" to "p12" format
date: '2010-02-06 05:13:34'
tags:
- cap-leena
- technology
link: http://www.multunus.com/blog/2010/02/convert-code-signing-certificates-from-pfx-to-p12-format/
---

One of the requirements we had was to sign the applet that we built for 
[UserThoughts](http://alpha.userthoughts.com/). We had purchased Comodo’s 
[code signing certificate](http://en.wikipedia.org/wiki/Code_signing) from 
[KSoftware](https://secure.ksoftware.net/code_signing.html?gclid=CN-epdfskZ8CFVBd4wodTC6EIA). 
When you download the certificate from their site, it automatically gets installed in IE. Follow these steps for converting it into format which you can use with the Java Jarsigner:

1. Export the certificate from IE by following the instructions given here: 
	[http://www.tech-pro.net/export-to-pfx.html](http://www.tech-pro.net/export-to-pfx.html)

2. The certificate with Private key will be exported as PFX format in the above step - but this 
**cannot** be used by the jarsigner. So you need to convert it into “p12 format” which the jarsigner can understand. For that you need to use Mozilla. First import the certificate  saved in step 1 into Mozilla as follows:
	- From the “Edit” menu select “Preferences” and open the “Privacy & Security” category and click on the “Certificates” item.
	- In the “Manage Certificates” section, click on the “Manage Certificates” button.
	- In the “Certificate Manager” window, the “Your Certificates” tab should automatically open. (If not, select it.)
	- Click the “Impor”t button at the bottom of the window.
	- It prompts you to select an existing file; select your certificate file from the location where you saved it in when you exported it.
	- It prompts you to provide the “Master Password”; enter it, if you have set one.
	- It prompts you to provide the password used to encrypt the certificate backup; enter it.
	- It should say “Successfully restored your certificate(s) and private key(s).” Click OK.

3. Then export the certificate as p12 format:
	- From the “Edit” menu select “Preferences” and open the “Privacy & Security” category and click on the “Certificates” item
	- In the “Manage Certificates” section, click on the “Manage Certificates” button.
	- In the “Certificate Manager” window, the “Your Certificates” tab should automatically open. (If not, select it.)
	- To export your “DOEGrids” or “KCA Personal Certificate”, click on it to select it, and click the “Backup” button at the bottom of the window.
	- You’ll be prompted to specify a filename and location for the “PKCS#12-format” certificate file (file extension will be “.p12” in UNIX/Linux,  ”.pfx” in Windows).  Provide them and click OK.
	- A dialog box requesting the Master Password may appear (the password and certificate database). If you have set a Master Password, provide it. If not, you can make one up and provide it (optional). 
	**Remember this password!**
	- You’ll be prompted to make up and (twice) enter a second password. This one is for restoring this particular backup of this certificate. 
	**Remember this password!**
	- Once the system says it’s successfully backed up your certificate and private key, click OK.

4. We also need to know the alias of the “.p12” file so run:

	```
	keytool -list -storetype pkcs12 -keystore <path to the cert file
	```

	Then you will see output like this:

	```
	Keystore type: pkcs12 Keystore provider: SunJSSE
	Your keystore contains 1 entry
	xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx, Apr 26, 2006, keyEntry,
	Certificate fingerprint (MD5):hh:hh:hh:hh:hh:hh:hh:hh:hh:hh:hh:hh:hh:hh:hh:hh
	The xxxx-xxx… number is the alias for the key
	```

5. Change your ant script as follows to sign the certificate:

	```
	[xml]<target name=”signjar” depends=”jar”> <signjar jar=”yourJar.jar” storetype=”pkcs12″ keystore=”yourkey.p12″ alias=”Your Alias” storepass=”your password”/></target>[/xml]
	```
