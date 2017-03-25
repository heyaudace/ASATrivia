//These questions need to be sorted
/*
Question sample is an array of questions. We need to sort them out. 
Task: 
- Make sure answer match with exactly one of the choices.
- Make sure things are consistent! If one choice is "46.2 USD", we need others to be "##.# USD"
- Make things clean for clarity. For example, the first question about Paul Kagame has been made clean except for a few errors (like in`Hastings Banda`). This includes pressing return after commas in the object and other stuffs. (try to imitate the one about Paul Kagame)
- Remove special characters. Change "$" to "USD" (this is specifically for United States Dollars, it could be something else. like, CFA for "Central African Franc"). If unsure, (eg, some questions have things like "\xe2\x80\x99"), look up what those characters mean. They are probably written in a different encoding and need to be converted to UTF-8. 
*/

question_sample = [
	{
		answer:`Paul Kagame`,
		question:`Who is the President of Rwanda`,
		choices:[`Paul Kagame`,`Hastings Banda`,`Helen Johnson Sirleaf`,`Gregoire Kayibanda`]
	},
	{
		answer:`Papias Malimba Musafiri`,
		question:`Who is the Minister of education of Rwanda`,
		choices:[`Papias Malimba Musafiri`,`Francois Kanimba`,`Silas Lwakabamba`,`Olusegun Obasanjo`,``]
	},
	{
		answer:`Rwandan Franc`,
		question:`What is the currency of Rwanda`,
		choices:[`Rwandan Franc`,`Rwandan Kwacha`,`Rwandan cedi`,`East African shilling`]
	},

	{
		answer:`638.67 USD`,
		question:`What is the GDP per capita of Rwanda as of 2013`,
		choices:[`638.67 USD`,`648.56 USD`,`504.44 USD`,`491.35 USD`]
	},
	{
		answer:`93rd`,
		question:`What is the FIFA ranking of the Rwandan national soccer team`,
		choices:[`93rd`,`95th`,`96th`,`97th`]
	},
	{
		answer:`1984`,
		question:`When was Rwanda's first appearance at the Olympic games`,
		choices:[`1984`,`1989`,`1990`,`1992`]
	},
	{
		answer:`2004`,
		question:`What is the last time Rwanda qualified for the AFCON`,
		choices:[`2004`,`2008`,`1992`,`2006`]
	},
	{
		answer:`knowless`,
		question:`Who sang baramushaka`,
		choices:[`knowless`,`Prisoner`,`Nameless`,`DJ Ovono`]
	},
	{
		answer:`Jean-Paul Samputu`,
		question:`Who won two kora awards in 2003 for "Most Inspiring" and "Best Traditional Artist"`,
		choices:[`Jean-Paul Samputu`,`Stukas`,`Zaiko langala`]
	},
	{
		answer:`Rwanda Nziza`,
		question:`What is the name of the Rwandan national anthem`,
		choices:[`Rwanda Nziza`,`Rwanda Havkumane`,`Jabula`,`Nopilozizo`]
	},
	{
		answer:`7`,
		question:`How many times has the Rwandan Salax awards been held`,
		choices:[`7`,`8`,`9`,`10`]
	},
	{
		answer:`Itorero`,
		question:`Name the main traditional Rwandan dance`,
		choices:[`Itorero`,`Ibutamba`,`Kane`,`Numbisi`]
	},
	{
		answer:`Afrobeat`,
		question:`What is the most modern music genre in Rwanda`,
		choices:[`Afrobeat`,`raggae`,`hip hop`,`Rwandan blues`]
	},
	{
		answer:`Tutsis and Hutus`,
		question:`What are the two main tribes of Rwanda`,
		choices:[`Tutsis and Hutus`,`Ebos and Yorubas`,`Zulus and Tswanes`,`Akans and Hausas`]
	},
	{
		answer:`Ugali`,
		question:`Which basic Rwandan dish is made from maize and water`,
		choices:[`Ugali`,`Isombe`,`Ibihaza`,`Kwante`]
	},
	{
		answer:`Joseph Kasavubu`,
		question:`Who was the first President of DR Congo`,
		choices:[`Joseph Kasavubu`,`Antoine Kisenga`,`Joseph Kasavubu`,`Idi Amin`]
	},
	{
		answer:`1960`,
		question:`: In which year did DR Congo gain independence`,
		choices:[`1960`,`1964`,`1990`,`1962`]
	},
	{
		answer:`2001`,
		question:`Since when has Joseph Kabila been the President of DR.Congo`,
		choices:[`2001`,`2003`,`2005`,`2009`]
	},
	{
		answer:`3`,
		question:`How many coup d'etats has DR Congo had`,
		choices:[`3`,`4`,`5`,`6`]
	},
	{
		answer:`Congolese Franc`,
		question:`What is the currency of DR Congo`,
		choices:[`Congolese Franc`,`Congolese Ranc`,`Congolese Guinese`,`Congolese Euro`]
	},
	{
		answer:`cobalt ore`,
		question:`What mineral is produced in large quantities by DR Congo`,
		choices:[`cobalt ore`,`cupronickel`,`silver`,`gold`]
	},
	{
		answer:`784 USD`,
		question:`What is the GDP per capita of DR congo as of 2013`,
		choices:[`784 USD`,`790 USD`,`799 USD`,`784 USD`]
	},
	{
		answer:`cobalt`,
		question:`Katanga Mining Limited is the world's largest producer of a particular mineral, which mineral is that`,
		choices:[`cobalt`,`gold`,`diamond`,`manganese`]
	},
	{
		answer:`Fimbu`,
		question:`What was the DR Congo national team known for at the just ended 2017 AFCON`,
		choices:[`Fimbu`,`Kwazu`,`Maaki`,`Nagana`]
	},
	{
		answer:`2009 and 2010`,
		question:`In what years did TP Mazembe win the CAF Champions league back to back`,
		choices:[`2009 and 2010`,`2011 and 2012`,`2013 and 2014`,`2006 and 2007`]
	},
	{
		answer:`Kabuscorp SCP`,
		question:`What team does Tresor Mputu Mabi play for currently`,
		choices:[`Kabuscorp SCP`,`FC Barcelona`,`TP Mazembe`,`Al Ittihad Sudan`]
	},
	{
		answer:`18`,
		question:`How many times has DR. Congo qualified for the AFCON`,
		choices:[`18`,`19`,`12`,`21`]
	},
	{
		answer:`Emenaya`,
		question:`Who sang Nzinzi`,
		choices:[`Emenaya`,`South Kwane Choir`,`Asa`,`DJ Cleo`]
	},
	{
		answer:`Soukous`,
		question:`What is the popular name for Congolese music`,
		choices:[`Soukous`,`Sophos`,`Swani`,`Manuvani`]
	},
	{
		answer:`Joseph Lutumba`,
		question:`Who composed the DR Congo National anthem`,
		choices:[`Joseph Lutumba`,`Clair Madungwe`,`Casper Semanya`,`Audace Laware`]
	},
	{
		answer:`Kinshasa`,
		question:`Which city in DR Congo is seen as one of the most innovative alongside Nairobi, Lagos, Johannesburg and Abidjan`,
		choices:[`Kinshasa`,`Kisangani`,`Kananga`,`Bandundu`]
	},
	{
		answer:`242`,
		question:`How many languages are spoken in DR Congo`,
		choices:[`242`,`243`,`245`,`249`]
	},
	{
		answer:`Pygmies`,
		question:`Which ethnic group are the earliest inhabitants of Congo`,
		choices:[`Pygmies`,`Bantus`,`Kongo`,`Kikongo`]
	},
	{
		answer:`Kingwana`,
		question:`What is the DR Congo dialect of Swahili called`,
		choices:[`Kingwana`,`Kingwane`,`Kigani`,`Kiluwani`]
	},
	{
		answer:`Lingala`,
		question:`What is the main language of the Bantu people`,
		choices:[`Lingala`,`French`,`Swahili`,`Tshiluba`]
	},
	{
		answer:`Ian Khama`,
		question:`Who is the President of Botswana`,
		choices:[`Ian Khama`,`Quett Masire`,`Festus Mogae`,`Gregoire Kayibanda`]
	},

	{
		answer:`Seretse Khama`,
		question:`Who was the first President of Botswana`,
		choices:[`Seretse Khama`,`Juvenal Habyarimana`,`Mokgweetsi Masisi`,`Tshekedi Khama`]
	},
	{
		answer:`zebra`,
		question:`What animal can be fund on the coat of arms of Botswana`,
		choices:[`zebra`,`eagle`,`horse`,`ostrich`]
	},
	{
		answer:`Botswana pula`,
		question:`What is the currency of Botswana`,
		choices:[`Botswana pula`,`Botswana mula`,`Botswna aula`,`Botswana shilling`]
	},
	{
		answer:`Cattle rearing`,
		question:`What is the main agricultural activity of Botswana`,
		choices:[`Cattle rearing`,`poultry`,`maize farming`,`fishery`]
	},
	{
		answer:`638.67`,
		question:`What is the main mineral exported by Botswana`,
		choices:[`638.67`]
	},
	{
		answer:`Jwaneng Diamond Mine`,
		question:`Which diamond mine in Botswana is the richest in the world today`,
		choices:[`Jwaneng Diamond Mine`,`Selebi-Phikwe`,`Morupule Power Station`,`Morupule`]
	},
	{
		answer:`The Zebras`,
		question:`What is the name of the Botswana soccer team`,
		choices:[`The Zebras`,`Teranga Lions`,`Antelopes`,`Botswane Horses`]
	},
	{
		answer:`8`,
		question:`How many times has Botswana been at the Olympics`,
		choices:[`8`,`9`,`10`,`11`]
	},
	{
		answer:`1980`,
		question:`When was Botswana's first appearance at the Olympic games`,
		choices:[`1980`,`1989`,`1992`,`1996`]
	},
	{
		answer:`2 silver`,
		question:`How many medals has Botswana won at the Olympic games`,
		choices:[`2 silver`,`2 gold`,`2 bronze`,`3 silver`]
	},
	{
		answer:`Vee Mampeezy`,
		question:`Who sang no suffer`,
		choices:[`Vee Mampeezy`,`Botswana Traditional Choir`,`Soweto National Band`,`Ketla`]
	},
	{
		answer:`Kwaito`,
		question:`Which music originated from Johannesburg but has made its way to Botswana`,
		choices:[`Kwaito`,`Zaiko langala`,`ndazola`,`mokomoto`]
	},
	{
		answer:`Fatshe leno la rona`,
		question:`What is the name of the Botswana national anthem`,
		choices:[`Fatshe leno la rona`,`Jabula`,`Wanzumani`,`Woza`]
	},
	{
		answer:`Zulu`,
		question:`Which of these is not a Botswanan music style`,
		choices:[`Zulu`,`Borankana`,`Chesa`,`Huru`]
	},
	{
		answer:`azonto`,
		question:`Which of these is not a traditional Botswanan dance`,
		choices:[`azonto`,`borankana`,`phathisi`,`setapa`]
	},
	{
		answer:`hiphop`,
		question:`What is the most modern music genre in Botswana`,
		choices:[`hiphop`,`afrobeat`,`jazz`,`raggae`]
	},
	{
		answer:`batawa`,
		question:`Which of the following is not a principal Tswane tribe`,
		choices:[`batawa`,`bakgatla`,`bakwena.balete.`]
	},
	{
		answer:`Seswaa`,
		question:`What is the main food of Botswana`,
		choices:[`Seswaa`,`pap`,`boerewors`,`vetkoek`]
	},
	{
		answer:`Pakalitha Mosisili`,
		question:`Who is the Prime Minister of the kingdom of Lesotho`,
		choices:[`Pakalitha Mosisili`,`Antoine Kisenga`,`Banda of Nyasaland`,`Alain Traore`]
	},
	{
		answer:`1966`,
		question:`: In which year did Lesotho gain independence`,
		choices:[`1966`,`1964`,`1965`,`1962`]
	},
	{
		answer:`Letsie III of Lesotho`,
		question:`Who is the king of the Lesotho kingdom`,
		choices:[`Letsie III of Lesotho`,`Letsie IV of Lesotho`,`Banda of Nyasaland`,`Queen Masenate Mohato Seeiso`]
	},
	{
		answer:`Unitary monarchy`,
		question:`What system is practised by Lesotho`,
		choices:[`Unitary monarchy`,`Aristocracy`,`Oligarchy`,`Democracy`]
	},
	{
		answer:`Lesotho Loti`,
		question:`What is the currency of Lesotho`,
		choices:[`Lesotho Loti`,`Lesotho Rand`,`Lesotho Franc`,`Lesotho Kwacha`]
	},
	{
		answer:`Diamond`,
		question:`What mineral is produced in large quantities by Lesotho`,
		choices:[`Diamond`,`gold`,`silver`,`manganese`]
	},
	{
		answer:`Maseru`,
		question:`What is the capital of Lesotho`,
		choices:[`Maseru`,`Sawhiru`,`Mahiru`,`Johannesburg`]
	},
	{
		answer:`3133 USD`,
		question:`What is the GDP per capita of Lesotho`,
		choices:[`3133 USD`,`3400 USD`,`3600 USD`,`3800 USD`]
	},
	{
		answer:`Crocodiles(Likuena)`,
		question:`What is the name of the Lesotho national team`,
		choices:[`Crocodiles(Likuena)`,`Djemba Djemba`,`Wasuliti`,`Mokoena`]
	},
	{
		answer:`0`,
		question:`How many times have the Lesotho national team qualified for the AFCON`,
		choices:[`0`,`1`,`2`,`3`]
	},
	{
		answer:`2000`,
		question:`In what year were Lesotho runner's up in the COSAFA Cup`,
		choices:[`2000`,`2003`,`2005`,`1999`]
	},
	{
		answer:`1972`,
		question:`In what year did Lesotho first qualify for the Olympics`,
		choices:[`1972`,`1978`,`1976`,`1977`]
	},
	{
		answer:`rock`,
		question:`Which of the following is not a popular music genre in Lesotho`,
		choices:[`rock`,`jazz`,`kwaito`,`raggae`]
	},
	{
		answer:`Lesotho Fatse La Bontata Rona`,
		question:`What is the national anthem of Lesotho`,
		choices:[`Lesotho Fatse La Bontata Rona`,`Amandla Na Ha Weta`,`Woza woza ni wozana`,`Makanuwa ni kagwe`]
	},

	{
		answer:`Sesotho`,
		question:`In what language is traditional church music of Lesotho`,
		choices:[`Sesotho`,`Wisothu`,`Sekwana`,`Mesuto`]
	},
	{
		answer:`French`,
		question:`Which of these is not a language of the Lesotho`,
		choices:[`French`,`English`,`Phuthi`,`Sotho`,`Xhosa`]
	},
	{
		answer:`Lekolulo`,
		question:`What is the name of the Lesotho traditional flute`,
		choices:[`Lekolulo`,`Lekuini`,`Lelakwna`,`Lewanuni`]
	},
	{
		answer:`Basotho`,
		question:`What is the largest ethnic group in Lesotho`,
		choices:[`Basotho`,`Masoweto`,`Asogwanatu`,`Mosawatu`]
	},

	{
		answer:`Sam Nujoma`,
		question:`Who was the first President of Namibia`,
		choices:[`Sam Nujoma`,`Hifikepunye Pohamba`,`Idi Amin`,`Hage Geingob`]
	},
	{
		answer:`1990`,
		question:`: In which year did Namibia gain independence`,
		choices:[`1990`,`1994`,`1998`,`1991`]
	},

	{
		answer:`Unity Liberty and Justice`,
		question:`What is the motto of Namibia`,
		choices:[`Unity Liberty and Justice`,`Peace and Love`,`Justice and Sovereignty`,`Love for all hatred for none`]
	},

	{
		answer:`diamond`,
		question:`What mineral is produced in largest quantity in Namibia`,
		choices:[`diamond`,`silver`,`cupronickel`,`manganese`]
	},
	{
		answer:`5693.13 USD`,
		question:`What is the GDP per capita of Namibia as of 2013`,
		choices:[`5693.13 USD`,`756.45 USD`,`11900.14 USD`,`15300.67 USD`,`19800.40 USD`]
	},


	{
		answer:`2`,
		question:`: How many times have Namibia qualified for the AFCON`,
		choices:[`2`,`3`,`4`,`5`]
	},
	{
		answer:`2015`,
		question:`In what year were Namibia plate winners for the COSAFA Cup`,
		choices:[`2015`,`2017`,`2011`,`2012`]
	},

	{
		answer:`alternate blues`,
		question:`Which of these is not a Namibian music style`,
		choices:[`alternate blues`,`pop`,`rock`,`raggae`]
	},
	{
		answer:`Malgaisa`,
		question:`Which of these is a popular Namibian dance music genre`,
		choices:[`Malgaisa`,`Wanaisa`,`Mangwasa`,`Wanasa`]
	},
	{
		answer:`Kwaito`,
		question:`Which of the following is the most popular and successful music genre of Namibia`,
		choices:[`Kwaito`,`Nsuwaito`,`Magawaito`,`Walagaito`]
	},
	{
		answer:`Jericho`,
		question:`Who sang I promise`,
		choices:[`Jericho`,`Mushe`,`Exit`,`Ozoseua`]
	},
	{
		answer:`Zulu`,
		question:`Which of these is not a Namibian language`,
		choices:[`Zulu`,`Oshiwambo`,`Nama/Damara`,`Afrikaans`]
	},
	{
		answer:`Sutwana`,
		question:`Which of these is not an ethnic group in Namibia`,
		choices:[`Sutwana`,`Rukwangali`,`Rumanyo`,`Setswana`]
	},
	{
		answer:`Swahili`,
		question:`Which of these was not an official language in Namibia during apartheid`,
		choices:[`Swahili`,`Afrikaans`,`German`,`English`]
	},
	{
		answer:`Haiti`,
		question:`What country in the Carribeans shares similar culture with Seychelles`,
		choices:[`Haiti`,`St. kitts and Navis`,`Jamaica`,`Sao Tome`]
	},
	{
		answer:`Filipe Nyusi`,
		question:`Who is the President of Mozambique`,
		choices:[`Filipe Nyusi`,`Samora Machel`,`Joaquim Chissano`,`Armando Guebuza`]
	},
	{
		answer:`Maputo`,
		question:`What is the capital of Mzambique`,
		choices:[`Maputo`,`Conakry`,`Accra`,`Mombasa`]
	},
	{
		answer:`Samora Machel`,
		question:`Who was the first president of Mozambique`,
		choices:[`Samora Machel`,`Charles Taylor`,`Ellen Johnson Sirleaf`]
	},
	{
		answer:`1964`,
		question:`In which year  did the Mozambique war of independence start`,
		choices:[`1964`,`1966`,`1968`,`1974`]
	},
	{
		answer:`metical`,
		question:`What is the currency of Mozambique`,
		choices:[`metical`,`naira`,`euro`,`franc`]
	},
	{
		answer:`plantain`,
		question:`What is these is not a main cash crop of Mozambique`,
		choices:[`plantain`,`cashew nuts`,`cotton`,`copra`]
	},
	{
		answer:`605.03 USD`,
		question:`What is the GDP per capita of Mozambique`,
		choices:[`605.03 USD`,`713 USD`,`600 USD`,`900 USD`]
	},

	{
		answer:`Os Mambas`,
		question:`What is the name of the Mozambique soccer team`,
		choices:[`Os Mambas`,`Amavubi`,`Teranga Lions`,`Black Stars`]
	},
	{
		answer:`105`,
		question:`What is the FIFA ranking of the Mozambique national soccer team`,
		choices:[`105`,`106`,`107`,`108`]
	},
	{
		answer:`1980`,
		question:`When was Mozambique's first appearance at the Olympic games`,
		choices:[`1980`,`1984`,`1988`,`1992`]
	},
	{
		answer:`4`,
		question:`What is the last time Rwanda qualified for the AFCON`,
		choices:[`4`,`5`,`8`,`9`]
	},
	{
		answer:`Portuguese`,
		question:`Which language largely influences Mozambique music`,
		choices:[`Portuguese`,`Frence`,`Spanish`,`Swahili`]
	},
	{
		answer:`Marrabenta`,
		question:`What is the name of the best known form of music from Mozambique`,
		choices:[`Marrabenta`,`Kwanza`,`hiplife`,`pandza`]
	},
	{
		answer:`patria amada`,
		question:`What is the name of the Mozambiquan national anthem`,
		choices:[`patria amada`,`viva a frelimo`,`obrigao Mozambique`,`Los Mozambiqoes superao`]
	},

	{
		answer:`Roman Catholicism`,
		question:`What is the median religion of Mozambique`,
		choices:[`Roman Catholicism`,`traditionalists`,`Shintoists`,`Hebrews`]
	},

	{
		answer:`April 26`,
		question:`On which day does Mozambique celebrate family day`,
		choices:[`April 26`,`July 26`,`August 26`,`October 26`]
	},
	{
		answer:`Matapa`,
		question:`Which cuisine of Mozambique is without Portuguese influence`,
		choices:[`Matapa`,`Piri-Piri`,`Crayfish`,`bitter leaf stew`]
	},
	{
		answer:`Danny Faure`,
		question:`Who is the president of Seychelles`,
		choices:[`Danny Faure`,`James Mancham`,`France-Albert Rene`,`James Michel`]
	},
	{
		answer:`1976`,
		question:`: In which year did Seychelles gain independence`,
		choices:[`1976`,`1978`,`1979  1982`]
	},
	{
		answer:`James Mancham`,
		question:`Who was the first President of Seychelles`,
		choices:[`James Mancham`,`France-Albert Rene`,`James Michel`,`Danny Faure`]
	},
	{
		answer:`1`,
		question:`How many coup d'etats has DR Congo had`,
		choices:[`1`,`4`,`6`,`8`]
	},
	{
		answer:`Seychellois rupee`,
		question:`What is the currency of Seychelles`,
		choices:[`Seychellois rupee`,`Kwacha`,`shilling`,`cedi`]
	},
	{
		answer:`gold`,
		question:`What of these minerals is not found in Seychelles`,
		choices:[`gold`,`clay`,`coral`,`sand`]
	},
	{
		answer:`16`,
		question:`What is the GDP per capita of Seychelles`,
		choices:[`16`,`185.90 USD`,`17900 USD`,`16500 USD`,`11650 USD`]
	},
	{
		answer:`Victoria`,
		question:`What is the largest city in Seychelles`,
		choices:[`Victoria`,`Effenburg`,`Edinbrugh`,`Sey Island City`]
	},
	{
		answer:`8`,
		question:`How many times have Seychelles been at the Olympic games`,
		choices:[`8`,`10`,`11`,`13`]
	},
	{
		answer:`0`,
		question:`How many medals do Seychelles have in the Olympic games`,
		choices:[`0`,`1`,`2`,`3`]
	},
	{
		answer:`0`,
		question:`How may times have Seychelles won gold at the Olympic games`,
		choices:[`0`,`1`,`2`,`3`]
	},
	{
		answer:`0`,
		question:`How many times has Seychelles qualified for the AFCON`,
		choices:[`0`,`1`,`2`,`4`]
	},
	{
		answer:`Folk music`,
		question:`Which of these is a popular music genre in Seychelles`,
		choices:[`Folk music`,`midweek blues`,`ragga`,`alternate`]
	},
	{
		answer:`hiplife`,
		question:`Which of these is not a popular form of music in Seychelles`,
		choices:[`hiplife`,`sega`,`raggae`,`seggae`]
	},
	{
		answer:`Koste Seselwa`,
		question:`Who composed the Seychelles National anthem`,
		choices:[`Koste Seselwa`,`Clair Madungwe`,`Audace Laware`,`Gregoire Mendel`]
	},
	{
		answer:`David Francois Marc Andre`,
		question:`Which of these  co-wrote the Seychelles National anthem`,
		choices:[`David Francois Marc Andre`,`David Makandwe`,`Audace Payet`,`David Payet`]
	},
	{
		answer:`Spanish`,
		question:`Which of these is not spoken in Seychelles`,
		choices:[`Spanish`,`French`,`English`,`Seselwa`]
	},
	{
		answer:`115`,
		question:`How many Islands make up Seychelles`,
		choices:[`115`,`117`,`119`,`121`]
	},
	{
		answer:`Germans Indians`,
		question:`Which of these is not an inhabitant of Seychelles`,
		choices:[`Germans Indians`,`French`,`Africans`]
	},
	{
		answer:`John Magafuli`,
		question:`Who is the President of Tanzania`,
		choices:[`John Magafuli`,`Elizabeth II`,`Ali Hassan Mwinyi`,`Benjamin Mkapa`]
	},
	{
		answer:`Dodoma`,
		question:`What is the capital of Tanzania`,
		choices:[`Dodoma`,`Dares Salam`,`Pretoria`,`Dorama`]
	},
	{
		answer:`Freedom and Unity`,
		question:`What is the motto of Tanzania`,
		choices:[`Freedom and Unity`,`Zeal and Unity`,`Togetherness and Unity`,`Strength and Togetherness`]
	},

	{
		answer:`Tanzanian shilling`,
		question:`What is the currency of Tanzania`,
		choices:[`Tanzanian shilling`,`shilling`,`kwacha`,`cefa`]
	},
	{
		answer:`ginger`,
		question:`Which of these is not a cash crop of Tanzania`,
		choices:[`ginger`,`maize`,`tobacco`,`cassava`]
	},
	{
		answer:`3097 USD`,
		question:`What is the GDP of Tanzania`,
		choices:[`3097 USD`,`4000 USD`,`999 USD`,`4120 USD`]
	},
	{
		answer:`51820000`,
		question:`What is the population of Tanzania`,
		choices:[`51820000`,`53000000`,`55000000`,`63290000`]
	},
	{
		answer:`football`,
		question:`Which of these is the most popular sport in Tanzania`,
		choices:[`football`,`hockey`,`golf`,`basketball`]
	},
	{
		answer:`158th`,
		question:`What is the FIFA ranking of the Tanzanian national soccer team`,
		choices:[`158th`,`160th`,`196th`,`197th`]
	},
	{
		answer:`jazz`,
		question:`Which of these is not a Tanzanian music genre`,
		choices:[`jazz`,`taarab`,`hip hop`,`bongo flavor`]
	},
	{
		answer:`Mungu Ibariki Africa`,
		question:`What is the name of the Tanzanian national anthem`,
		choices:[`Mungu Ibariki Africa`,`Kwane na Africa`,`Makafilizo N Nzembe`,`Mange wara farai`]
	},
	{
		answer:`Enoch Sontonga`,
		question:`Who composed the Tanzanian National anthem`,
		choices:[`Enoch Sontonga`,`Enoch Madungwe`,`Eric Mwale`,`John Ndiga`]
	},
	{
		answer:`Falz`,
		question:`Which of these is not a Tanzanian artist`,
		choices:[`Falz`,`Dionys Mbilinyi`,`John Mgandu`,`Sabinus Komba`]
	},
	{
		answer:`Ugali`,
		question:`Which of these is a popular Tanzanian dish`,
		choices:[`Ugali`,`kwanoa`,`red red`,`saza`]
	},
	{
		answer:`Fulani`,
		question:`Which of these is not an ethnic group in Tanzania`,
		choices:[`Fulani`,`Maasai`,`Nyamwesi`,`Sukuma`]
	},
	{
		answer:`yam`,
		question:`Which of these is not a staple food in Tanzania`,
		choices:[`yam`,`cassava`,`millet`,`rice`]
	},
	{
		answer:`6th`,
		question:`What's Nigeria's rank in worldwide farm output`,
		choices:[`6th`,`8th`,`2nd`,`5th`]
	},
	{
		answer:`1962`,
		question:`: In which year did Uganda gain independence`,
		choices:[`1962`,`1965`,`1966`,`1969`]
	},
	{
		answer:`For god and my country`,
		question:`What is the motto of Uganda`,
		choices:[`For god and my country`,`God before everything`,`Uganda above all else`,`Strength in the Cranes`]
	},
	{
		answer:`1971`,
		question:`In which year did Idi Amin Dada take over in a coup d'etat in Uganda`,
		choices:[`1971`,`1973`,`1975`,`1978`]
	},
	{
		answer:`Ugandan shilling`,
		question:`What is the currency of Uganda`,
		choices:[`Ugandan shilling`,`Kwacha`,`cefa`,`franc`]
	},
	{
		answer:`manganese`,
		question:`Whic of these minerals is not produced by Uganda`,
		choices:[`manganese`,`cobalt`,`gold`,`iron`]
	},
	{
		answer:`2165 USD`,
		question:`What is the GDP per capita of Uganda`,
		choices:[`2165 USD`,`2200 USD`,`2190 USD`,`2390 USD`]
	},
	{
		answer:`Kampala`,
		question:`What is the largest city in Uganda`,
		choices:[`Kampala`,`Soweto`,`Djibouti`,`Doula`]
	},
	{
		answer:`Cranes`,
		question:`What is the name of the Uganda national team`,
		choices:[`Cranes`,`Copper bullets`,`Dessert Foxes`,`black stars`]
	},
	{
		answer:`16`,
		question:`How many times have Uganda qualified for the Olympics`,
		choices:[`16`,`17`,`18`,`19`]
	},
	{
		answer:`7`,
		question:`How many medals have Uganda won at the Olympic games`,
		choices:[`7`,`8`,`11`,`12`]
	},
	{
		answer:`14`,
		question:`How many times has Uganda won the CECAFA Cup`,
		choices:[`14`,`15`,`16`,`18`]
	},
	{
		answer:`Emenaya`,
		question:`Who s`,
		choices:[`Emenaya`,`South Kwane Choir`,`Asa`,`DJ Cleo`]
	},
	{
		answer:`Kidandali`,
		question:`Which of these is the most popular music genre in Uganda`,
		choices:[`Kidandali`,`Waganawari`,`Mawanduli`,`Wakawani`]
	},
	{
		answer:`George Wilberforce Kakoma`,
		question:`Who composed the Ugandan national anthem`,
		choices:[`George Wilberforce Kakoma`,`Hastings Banda`,`Muru Iyasu`,`Asanahawa Muntwe`]
	},
	{
		answer:`Maasai`,
		question:`Which of these is not one of the three ethnic groups that make up native Uganda`,
		choices:[`Maasai`,`Bantu`,`Nilotic`,`Central Sudanic`]
	},
	{
		answer:`Baganda`,
		question:`Which of these is the most prominent tribe in Uganda`,
		choices:[`Baganda`,`Waware`,`Wazumba`,`Basewagu`]
	},
	{
		answer:`Kadongo kamu`,
		question:`Which of these is a major music style in traditional Uganda`,
		choices:[`Kadongo kamu`,`dancehall`,`hip hop`,`jazz`]
	},
	{
		answer:`Ismail Omar Guelleh`,
		question:`Who is the President of Djibouti`,
		choices:[`Ismail Omar Guelleh`,`Hassan Shehatta`,`Ousmane Alhassan`,`Mahmoudou Diallo`]
	},
	{
		answer:`Hassan Gouled Aptidon`,
		question:`Who was the first President of Djibouti`,
		choices:[`Hassan Gouled Aptidon`,`Ismail Omar Guelleh`,`Hassan Shehatta`,`Mahmoudou Diallo`]
	},
	{
		answer:`eagle`,
		question:`Which of these is not a component of Djibouti's coat of arms`,
		choices:[`eagle`,`sword`,`star`,`shield`]
	},
	{
		answer:`Seaport`,
		question:`What industry serves as Djibouti's main source of income`,
		choices:[`Seaport`,`tobacco`,`coffee`,`barley`]
	},
	{
		answer:`1668.34 USD`,
		question:`What is the GDP per capita of Rwanda`,
		choices:[`1668.34 USD`,`1679.41 USD`,`1800.56 USD`,`1568.50 USD`]
	},
	{
		answer:`178.97`,
		question:`How many Djiboutian francs equal one dollar`,
		choices:[`178.97`,`192`,`160`,`194`]
	},
	{
		answer:`Riverains de la Mer Rouge`,
		question:`What is the name of the Djibouti soccer team`,
		choices:[`Riverains de la Mer Rouge`,`Riverains de la Mer Noir`,`Riverains de la Mer Blancs`,`Riverains de la Mer`]
	},
	{
		answer:`205`,
		question:`What is the FIFA ranking of the Djibouti national soccer team`,
		choices:[`205`,`207`,`209`,`233`]
	},
	{
		answer:`1984`,
		question:`When was Djibouti's first appearance at the Olympic games`,
		choices:[`1984`,`1989`,`1990`,`1992`]
	},
	{
		answer:`never`,
		question:`What is the last time Djibouti qualified for the AFCON`,
		choices:[`never`,`2002`,`2004`,`1998`]
	},
	{
		answer:`Djibouti`,
		question:`What is the national anthem of Djibouti`,
		choices:[`Djibouti`,`Maputi`,`Maputo`,`Arise Djibouti`]
	},
	{
		answer:`Aden Elmi`,
		question:`Who composed the Djibouti national anthem`,
		choices:[`Aden Elmi`,`Ade Sami`,`Abdi Deeqsi`,`Hassan Souhare`]
	},
	{
		answer:`Abdi Deeqsi`,
		question:`What brought miniature poetry to prominence in Djibouti`,
		choices:[`Abdi Deeqsi`,`Hassan Souhare`,`Nima Djama`,`Abdo Xamar Qoodh`]
	},
	{
		answer:`7`,
		question:`How many times has the Rwandan Salax awards been held`,
		choices:[`7`,`8`,`9`,`10`]
	},
	{
		answer:`Arabic and French`,
		question:`What are the official languages of Djibouti`,
		choices:[`Arabic and French`,`Portuguese and German`,`Swahili and French`,`English nad Swahili`]
	},
	{
		answer:`1862`,
		question:`In what year did France start colonizing Djibouti`,
		choices:[`1862`,`1888`,`1890`,`1896`]
	},
	{
		answer:`5`,
		question:`What is the Presidential term in Sao Tome`,
		choices:[`5`,`6`,`7`,`8`]
	},
	{
		answer:`matchet`,
		question:`Which of these is not found on the coat of arms of Sao Tome`,
		choices:[`matchet`,`star`,`eagle`,`palm tree`]
	},
	{
		answer:`15th century`,
		question:`In which century did Portuguese explorers discover Sao Tome`,
		choices:[`15th century`,`16th century`,`18th century`,`20th century`]
	},
	{
		answer:`dobra`,
		question:`What is the currency of Sao Tome`,
		choices:[`dobra`,`quobra`,`wabra`,`agabra`]
	},
	{
		answer:`coffee`,
		question:`What is the main cash crop of Sao Tome`,
		choices:[`coffee`,`coffee`,`timber`,`barley`]
	},
	{
		answer:`1`,
		question:`What is the GDP per capita of Sao Tome`,
		choices:[`1`,`609.82 USD`,`1900 USD`,`1670 USD`,`1800 USD`]
	},
	{
		answer:`22865.89`,
		question:`How many Sao Tome dobras equal one dollar`,
		choices:[`22865.89`,`23 700`,`24600`,`28900`]
	},
	{
		answer:`The Falcons and True Parrots Team`,
		question:`What is the name of the Sao Tome soccer team`,
		choices:[`The Falcons and True Parrots Team`,`The Falcons and Eagles`,`The Strange Eagles of Tome`,`The Falcons and True Eagles Team`]
	},
	{
		answer:`153rd`,
		question:`What is the FIFA ranking of the Sao Tome national soccer team`,
		choices:[`153rd`,`195th`,`196th`,`197th`]
	},
	{
		answer:`1996`,
		question:`When was Sao Tome's first appearance at the Olympic games`,
		choices:[`1996`,`1998`,`2000`,`2004`]
	},
	{
		answer:`never`,
		question:`What is the last time Sao Tome qualified for the AFCON`,
		choices:[`never`,`2002`,`2008`,`1978`]
	},
	{
		answer:`Kizomba`,
		question:`Which of these is popular pop music from Angola in Sao Tome`,
		choices:[`Kizomba`,`Wazomba`,`Mazomba`,`Wayazomba`]
	},
	{
		answer:`Tchiloli`,
		question:`In Sao tome, what name is given to a musical dance performance that tells a dramatic story`,
		choices:[`Tchiloli`,`Waikoli`,`Mawawoti`,`Maizoki`]
	},
	{
		answer:`Independencia total`,
		question:`What is the name of the Sao Tome national anthem`,
		choices:[`Independencia total`,`Independencia officiale`,`Independencia Social`,`Independencia Originale`]
	},
	{
		answer:`kwaito`,
		question:`which of these is not a  musical rhythym of Sao Tome`,
		choices:[`kwaito`,`Ussua`,`socope`,`dexa`]
	},
	{
		answer:`Roman Catholicism`,
		question:`Which of these is the most popular religion in Sao Tome`,
		choices:[`Roman Catholicism`,`Islam`,`Ekankaar`,`Judaism`]
	},
	{
		answer:`2`,
		question:`How many equaorial islands does Sao Tome inhabit`,
		choices:[`2`,`3`,`4`,`5`]
	},
	{
		answer:`Creole`,
		question:`Which of these is the most popular language in Sao Tome`,
		choices:[`Creole`,`Wayole`,`Maogole`,`Sawole`]
	},
	{
		answer:`Forro`,
		question:`What is the local name for Creole, the most popular language in Sao Tome`,
		choices:[`Forro`,`Sorro`,`Warolo`,`Suorro`]
	},
	{
		answer:`Mohamed Abdullahi Mohamed`,
		question:`Who is the President of Somalia`,
		choices:[`Mohamed Abdullahi Mohamed`,`Joseph Kasavubu`,`Antoine Kisenga`,`Joseph Kasavubu`]
	},
	{
		answer:`1960`,
		question:`: In which year did Somalia gain independence`,
		choices:[`1960`,`1964`,`1990`,`1962`]
	},
	{
		answer:`July 1`,
		question:`What is the independence day of Somalia`,
		choices:[`July 1`,`June 1`,`August 1`,`October 1`]
	},

	{
		answer:`Somalia shilling`,
		question:`What is the currency of Somalia`,
		choices:[`Somalia shilling`,`Somalia CFA`,`Somalia kwacha`,`Somalia guiness`]
	},
	{
		answer:`agriculture`,
		question:`What is the main stay of Somalia of Somalia`,
		choices:[`agriculture`,`mining`,`manufacturing`,`construction`]
	},
	{
		answer:`145.06 USD`,
		question:`What is the GDP per capita of Somalia`,
		choices:[`145.06 USD`]
	},
	{
		answer:`The Ocean stars`,
		question:`What is the name of the Somalia soccer team`,
		choices:[`The Ocean stars`,`Amavubi(The wasps)`,`The Birds`,`Teranga Lions`]
	},
	{
		answer:`205`,
		question:`What is the FIFA ranking of the Somalia national soccer team`,
		choices:[`205`,`208`,`209`,`210`]
	},
	{
		answer:`1972`,
		question:`When was Somalia's first appearance at the Olympic games`,
		choices:[`1972`,`1976`,`1988`,`1992`]
	},
	{
		answer:`never`,
		question:`What is the last time Somalia qualified for the AFCON`,
		choices:[`never`,`2`,`6`,`7`]
	},
	{
		answer:`Somali folklore`,
		question:`On what is Somalian music centered`,
		choices:[`Somali folklore`,`Somali puns`,`Somali literature`,`Somali acoustics`]
	},
	{
		answer:`Soomaaliyeey toosoo`,
		question:`Which of the following is a well known Somali song that dates back to the 1940s`,
		choices:[`Soomaaliyeey toosoo`,`Soomaaliyeey waasoo`,`Soomaaliyeey harasoo`,`Soomaaliyeey Nhamarasoo`]
	},
	{
		answer:`Islam`,
		question:`Which of these is the main religion in Somalia`,
		choices:[`Islam`,`Ahmadiyyah`,`Ekankaar`,`Christianity`]
	},
	{
		answer:`jilbab`,
		question:`Which of these is a traditional attire among women in Somalia`,
		choices:[`jilbab`,`hilbab`,`ajilbab`,`mazigbab`]
	},
	{
		answer:`Somali`,
		question:`What is the language spoken among majority of people in Somalia`,
		choices:[`Somali`,`Swahili`,`Harambe`,`Mazarangwe`]
	},
	{
		answer:`basmati rice`,
		question:`Which of the following is a main rice dish in Somalia`,
		choices:[`basmati rice`,`wasawati rice`,`wamasari rice`,`pad thai rice`]
	},
	{
		answer:`Ethiopian Birr`,
		question:`What is the currency of Ethiopia`,
		choices:[`Ethiopian Birr`,`Ethiopian Nehas`,`Ethiopian Shilling`,`Ethiopian Amole`]
	},
	{
		answer:`505.05 USD`,
		question:`As of 2013, What is the GDP per capita of Ethiopia`,
		choices:[`505.05 USD`,`650.05 USD`,`5505.05 USD`,`405.55 USD`]
	},
	{
		answer:`Japan`,
		question:`On one of Tilahun Gessesse Songs, He sings about falling in love with a national of this country`,
		choices:[`Japan`,`China`,`Kenya`,`Somalia`]
	},
	{
		answer:`88`,
		question:`How many languages are spoken in Ethiopia`,
		choices:[`88`,`77`,`81`,`79`]}
];

module.exports = question_sample;
