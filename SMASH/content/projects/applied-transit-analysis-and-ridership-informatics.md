---
icon: mdi:train
title: Applied Transit Analysis and Ridership Informatics
abbreviation: ATARI
---

## Deciphering longer bike-share trips in NYC duration in COVID-19

Recent studies on the changes of BSS mentioned there is an increase in the BSS trip duration during the COVID-19 pandemic. For example, in NYC there is nearly 40% increase of the trip duration in March 2020 than months before COVID (Teixeira and Lopes, 2020). Similar increases were also observed in other US cities like Boston and Chicago (Padmanabhan et al., 2021). Another study on NYC concluded the increase of longer trips can suggest the shift from the subway, due to fear of contagion (Wang and Noland, 2021). Such increase is not only found in US but also seen in some European cities such as London (Heydari et al., 2021), Zurich and Kosice, Slovakia. This common fact is a strong indicator of the replacement from public transit to bike share, but there are no further verification or explanation on this. By looking into different heuristic reasons, this research pracitce aims to investigate if the link between longer trip duration and replacement of public transit holds or breaks. We selected NYC as the study area as it has the largest usage of BSS and is mostly discussed.

Methodology to achieve the objective of this research contains two parts: to find the most significant factor causing the longer trip duration and 2nd, the explanation. Potential reasons came from the BSS itself, such as people may cycle slower, or the system expansion may increase the distance of origin and destination. These two hypotheses are rejected by examining the same origin and destination existing before and after COVID. We observed same speed but more trips between longer origin-destination. 

Then we consider public transit as the external factor because BSS is often introduced as a complementation or substitution of public transit. Compared with public transit, BSS can better address the first or last mile problem. 

From existing studies on the relationship of BSS and public transit, one methodology proposed to assign mode  semantics with public transit for each bike trip. This mode semantics could help answer our question.

To infer the relationship between each bike trip and PT, each trip is labeled with mode substitution / mode integration and mode complement. We use the substitution and integration trips to confirm the replacement from PT to bike share trips. 

This method first classifies stations of trip origin and destination by its accessibility to PT hub into three categories. A for stations within 100m buffer area of a PT; B for less than 400m and C for outside PT service area


Based on the station categories and the trip duration, using a rule-based classification tree, each bike trip is classified into three mode semantics: Modal substitution, integration and complementation. MS represents relatively Long trip that starts and ends close to PT. MI includes Short trip that starts or ends close to PT to represent trips with a combined mode of bike and PT. MC include two cases. First Long trip or complex PT transfer starts and ends close to PT. second, Any trip that starts and ends far from PT.

The classification system is applied to daily trips of 2019 and 2020. Results of 2019 show that before COVID-19, most trips are integration or substitution with PT and less than 10 percent of total trips are complementation of PT. Winter has less MI trips than MS while during summer times MI and MS have the same share. In 2020 after the COVID-19 Results show that there is an increase in the mode substitution and decrease in the mode integration after the outbreak in April 2020. This can result longer trip duration. But the increase of MS trips are mostly on weekend which is shown as the red spikes. This means people take more longer trips during weekends which is different from 2019 patterns.

The result provides an encouraging evidence that demonstrates a shift from public transit to bike trips. In the second part, the explanation of the substitution is discussed by exploring some heuristic reasons. Intuitively the reasons are the health concern, the extra delay from reduced services and free membership program. Some background of free membership is that during the first two months of COVID-19, free one year membership of Citibike was granted to healthcare workers in NYC. 
The influence of free membership was discussed in the two other papers, so I focused on the first two in this research. Our method is to collect delay information of PT and travel time matrix of PT and BSS




The travel time matrix compare the time trade-off between same origin and destination. From the left two heatmaps, Normally, bike trips happens when it can save more time than PT. For example, the dark blue means for the origin destination that take 16 min with BSS, it would take 20 minutes for PT. From the difference of trip distribution between two periods, we know more bike trips are made even PT has shorter trip time. Also overall, bike trip save 5.5 minutes before COVID but only save 4.6 min during the COVID. Both findings upvote the health concern reason.

To summarize, Mode semantics classification and explorative data analysis on various hypotheses help to confirm an increase in the substitution of bike-share over public transit as the reason of longer trip duration in COVID-19.
Between the reasons of delay and health concern, this substitution is less possible due to the delay of PT as the short period of delay doesn’t overlap the longer substitution period. While it is more possible due to the health concern as #1 the average trip time saving of bike-share decrease and #2 longer bike trip replacing PT still happened after the resume of regular PT service.
The work is in progress and expected to add more quantitative analysis to get a better understanding of the explanatory factors.
Limitations: 1) no ground truth for the semantics interpretation; 2) other possible factors to increase the usage of BSS such as: less traffic on road - bike lane is safer to use.  Third Delay analysis is simplified as we don’t have a full archive of delay history. We are looking forward to see if there are any data sources with such information.





