Useful resources:

- https://github.com/FerdinandNathaniel/Mikmak
- https://github.com/Ecwid/ecwid-api-docs/blob/master/includes/_extra_fields.md
- https://support.ecwid.com/hc/en-us/articles/207101429-Can-I-change-design-of-certain-pages-only-#based-on-page
- https://api-docs.ecwid.com/reference/store-profile
- https://my.ecwid.com/store/30117004#develop-apps:name=custom-app-30117004-1

Authentication (REST API):
<!-- public key is for reading access, only we need for now -->
public key = public_AK3B8BKAA7FdRarVHLFq1Zqp2sq1j9kg

<!-- private key is for modifying access, perhaps needed for linking made input fields to output, or does ecwid do this automatically? -->

___

- meerdere input elements met dezelfde non-unique ID ('form-control__text') waardoor ik geen individuele waardes af kan lezen, hoe dat op te lossen?
  - boeit dat als ik de waarde eruit kan halen? en dan checken wat die waarde is?
  - boeit wel als ik bepaalde moet hiden/showen
  - moet dus aangepast worden

- hoe waarden aflezen?
  - ID als zelf inputwaarden aangemaakt
  - aria-labels worden gebruikt door ecwid zelf als link

- waar in body komt het script te staan? als laatst?
  - in header, na basis ecwid calls, voordat de andere invoervelden aangemaakt worden
    - zou in principe niet moeten boeien, afgezien van het aanmaken van invoervelden omdat deze dan hoger zullen staan ipv onderaan de opties?

- https://chromium.googlesource.com/chromium/src/+/refs/heads/main/services/network/cross_origin_read_blocking_explainer.md
  - Hoe dit te fixen?
  - console read out: 'Cross-Origin Read Blocking (CORB) blocked cross-origin response with MIME type text/plain.'
    - via ecwid andere link, github zou toch moeten werken, zit het in de vorm van het document?
      - Enkel comments werkt niet
      - Meest basale console read out werkt niet
      - https://stackoverflow.com/questions/55159973/how-to-solve-this-problem-cross-origin-read-blocking-corb-blocked-cross-orig
        - Ligt misschien aan Ajax call, misschien de jquery download? Maar wanneer die gecomment is zelfde drama..
        - Server-side probleem van ecwid?
        - Mensen geven aan een directie te hebben om te zoeken nu naar kern probleem, maar heb daar zelf geen kennis van.