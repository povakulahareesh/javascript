
  let users = [{ "id": 1, "name": "Hewes", "email": "dhewes0@mozilla.com", "gender": "Male" },
    { "id": 2, "name": "Farfalameev", "email": "mfarfalameev1@harvard.edu", "gender": "Male" },
    { "id": 3, "name": "Gayton", "email": "lgayton2@japanpost.jp", "gender": "Male" },
    { "id": 4, "name": "Largan", "email": "vlargan3@patch.com", "gender": "Male" },
    { "id": 5, "name": "Webburn", "email": "swebburn4@irs.gov", "gender": "Female" },
    { "id": 6, "name": "Presley", "email": "dpresley5@cnn.com", "gender": "Male" },
    { "id": 7, "name": "Hawson", "email": "rhawson6@pagesperso-orange.fr", "gender": "Female" },
    { "id": 8, "name": "Ruddock", "email": "cruddock7@uiuc.edu", "gender": "Female" },
    { "id": 9, "name": "Howsin", "email": "ehowsin8@meetup.com", "gender": "Female" },
    { "id": 10, "name": "Beaby", "email": "cbeaby9@epa.gov", "gender": "Female" },
    { "id": 11, "name": "Wyeth", "email": "dwyetha@wisc.edu", "gender": "Female" },
    { "id": 12, "name": "Thorne", "email": "ethorneb@answers.com", "gender": "Male" },
    { "id": 13, "name": "Mayworth", "email": "ymayworthc@nasa.gov", "gender": "Male" },
    { "id": 14, "name": "Clemensen", "email": "dclemensend@adobe.com", "gender": "Female" },
    { "id": 15, "name": "Neale", "email": "gnealee@lulu.com", "gender": "Female" },
    { "id": 16, "name": "Beat", "email": "fbeatf@hexun.com", "gender": "Male" },
    { "id": 17, "name": "Nicely", "email": "mnicelyg@techcrunch.com", "gender": "Genderqueer" },
    { "id": 18, "name": "Caddell", "email": "acaddellh@linkedin.com", "gender": "Male" },
    { "id": 19, "name": "Kenningley", "email": "pkenningleyi@w3.org", "gender": "Female" },
    { "id": 20, "name": "Bool", "email": "aboolj@seesaa.net", "gender": "Female" },
    { "id": 21, "name": "Bachellier", "email": "rbachellierk@nsw.gov.au", "gender": "Female" },
    { "id": 22, "name": "Drain", "email": "tdrainl@apple.com", "gender": "Male" },
    { "id": 23, "name": "Bellison", "email": "ibellisonm@microsoft.com", "gender": "Male" },
    { "id": 24, "name": "Gronous", "email": "ygronousn@addthis.com", "gender": "Non-binary" },
    { "id": 25, "name": "Martinek", "email": "emartineko@photobucket.com", "gender": "Female" },
    { "id": 26, "name": "Zottoli", "email": "vzottolip@statcounter.com", "gender": "Male" },
    { "id": 27, "name": "Reddings", "email": "treddingsq@spiegel.de", "gender": "Female" },
    { "id": 28, "name": "Ring", "email": "jringr@facebook.com", "gender": "Female" },
    { "id": 29, "name": "Bathurst", "email": "rbathursts@xing.com", "gender": "Male" },
    { "id": 30, "name": "Cressy", "email": "rcressyt@sciencedirect.com", "gender": "Male" },
    { "id": 31, "name": "Danev", "email": "cdanevu@eventbrite.com", "gender": "Male" },
    { "id": 32, "name": "Willcock", "email": "pwillcockv@rakuten.co.jp", "gender": "Female" },
    { "id": 33, "name": "Dankov", "email": "edankovw@163.com", "gender": "Female" },
    { "id": 34, "name": "Hopewell", "email": "rhopewellx@youtu.be", "gender": "Non-binary" },
    { "id": 35, "name": "Wooffinden", "email": "wwooffindeny@indiatimes.com", "gender": "Male" },
    { "id": 36, "name": "Leathart", "email": "cleathartz@wikipedia.org", "gender": "Male" },
    { "id": 37, "name": "Yorke", "email": "myorke10@eepurl.com", "gender": "Female" },
    { "id": 38, "name": "Rickhuss", "email": "hrickhuss11@godaddy.com", "gender": "Female" },
    { "id": 39, "name": "Gallety", "email": "mgallety12@whitehouse.gov", "gender": "Female" },
    { "id": 40, "name": "Aizikovitz", "email": "gaizikovitz13@tiny.cc", "gender": "Female" },
    { "id": 41, "name": "De Bruin", "email": "hdebruin14@devhub.com", "gender": "Male" },
    { "id": 42, "name": "Bisiker", "email": "rbisiker15@acquirethisname.com", "gender": "Male" },
    { "id": 43, "name": "Srutton", "email": "tsrutton16@foxnews.com", "gender": "Male" },
    { "id": 44, "name": "Czaja", "email": "mczaja17@wikispaces.com", "gender": "Male" },
    { "id": 45, "name": "Walczynski", "email": "awalczynski18@princeton.edu", "gender": "Female" },
    { "id": 46, "name": "Killoran", "email": "rkilloran19@tripod.com", "gender": "Female" },
    { "id": 47, "name": "Yashunin", "email": "tyashunin1a@sciencedaily.com", "gender": "Female" },
    { "id": 48, "name": "Hartwell", "email": "ehartwell1b@ftc.gov", "gender": "Female" },
    { "id": 49, "name": "Hablet", "email": "ehablet1c@weebly.com", "gender": "Male" },
    { "id": 50, "name": "Yansons", "email": "vyansons1d@senate.gov", "gender": "Female" }];
    
    



function data() { 
    let rows = "";
    for (let user of users) {
        rows += `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
        </tr>`;
    }
    document.getElementById("table_data").innerHTML = rows;
 }
 
