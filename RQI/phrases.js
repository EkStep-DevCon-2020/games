let phrases_english = [
    'I did not sleep',
    'I lost my hat',
    'Let us go from here',
    'Do you have onions',
    'Is this your garden',
    'fine fresh fish for you',
    'A big black bear sat on a big black rug',
    'Eddie edited it',
    'I wish to wash my Irish wristwatch',
    'I saw a kitten eating chicken in the kitchen',
    'I scream, you scream, we all scream for ice cream',
    'She sells seashells by the seashore',
    'If a dog chews shoes, whose shoes does he choose',
    'I thought I thought of thinking of thanking you',
    'We surely shall see the sun shine soon'
 ] 

  let phrases_hindi = [
    "फालसे  का  फासला",
    "वह  पढ़  रहा  है",
    "मैं  स्कूल  जाना  चाहता  हूँ",
    "क्या  आप  छुट्टी  पर  जा  रहे   हैं",
    "तुमने  आज  क्या  खाया",
    "खेल  का  मैदान",
    "उसने  कठिन  समस्या  का  समाधान  किया",
    "भारत  में  कई  लोग  गाय  को  पूज्य  मानते  हैं",
    "डबल  बबल  गम  बबल  डबल"
        ];


        let phrases_hindi_1 = [
          "फालसे का फासला",
          "वह पढ़ रहा है",
          "मैं स्कूल जाना चाहता हूं",
          "क्या आप छुट्टी पर जा रहे हैं",
          "तुमने आज क्या खाया",
          "खेल का मैदान",
          "उसने कठिन समस्या का समाधान किया",
          "भारत में कई लोग गाय को पूज्य मानते हैं",
          "डबल बबल गम बबल डबल"
              ];


  let masterData_english = [];
  let masterData_hindi = [];

  phrases_english.forEach(element  => {
    var data = element.split(" ");
    data.forEach(element => {
    masterData_english.push(element.toLowerCase());
}); 
  });

  

  phrases_hindi.forEach(element  =>{
    var data = element.split("  ");
    data.forEach(element => {
    masterData_hindi.push(element);
}); 
   })


   console.log(masterData_english);
   console.log(masterData_hindi);