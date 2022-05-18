---
icon: mdi:train
title: Applied Transit Analysis and Ridership Informatics
abbreviation: ATARI
---


## Deciphering longer bike-share trips in NYC duration in COVID-19
Presented by Zheng Liu on AAG 2022 Annual Meeting
### Introduction
Recent studies on the changes in BSS mentioned there is an increase in the BSS trip duration during the COVID-19 pandemic. For example, in NYC Citi Bike which is a dock-based bike-share system, there is a nearly 40% increase in the trip duration in March 2020 than months before COVID (Teixeira and Lopes, 2020). Similar increases were also observed in other US cities like Boston and Chicago (Padmanabhan et al., 2021). Another study on NYC Citi Bike concluded the increase in longer trips can suggest the shift from the subway, due to fear of contagion (Wang and Noland, 2021). Such increases in the trip length are not only found in the US, but also seen in some European cities such as London (Heydari et al., 2021), Zurich (Li et al., 2021), and Kosice, Slovakia (Kubalak et al. 2021). Such change is a strong indicator of the replacement of public transit with bike share, but there is no further verification or explanation on this. By looking into different heuristic reasons, this research practice aims to investigate if the link between longer trip duration and replacement of public transit holds or breaks. NYC is selected as the study area as it has the largest usage of bike-sharing and is mostly discussed in the related studies.
### Methods
Methodology in achieving the objective of this research contains two parts: First, to confirm the most significant factor causing the longer trip duration, and second, the corresponding explanation. Intuitively, reasons for the trip duration increase might come from the internity of BSS itself, such as people may cycle slower due to the higher traffic speed when sharing roads with fewer motor vehicles during the lockdown, or the system expansion may increase the average distance between an origin station and a destination station. These two hypotheses are rejected by examining the same origin and destination existing in the time period before and after COVID. Under the identical station condition, the hypothesis of unchanged speed cannot be rejected. Yet more trips between longer origin-destination were found since the initial outbreak of COVID. 

As the external factor, public transit is usually considered an important factor in the usage of bike-share because a bike-share system is often introduced as complementation or substitution of public transit. Different from public transit which is targeted for long-distance transit, BSS can better address the first- or last-mile problem. From existing studies on the relationship between BSS and public transit, a methodology was proposed to assign mode semantics with public transit for each bike trip (Kong et al., 2020). The bike-share mode semantics might answer the first research question.

To infer the relationship between each bike trip and public transit, each bike-share trip is labeled with mode substitution (MS), mode integration (MI), or mode complementation (MC). We use the MS and MI trips to investigate the replacement of public transit, especially the ridership of NYC Subway, with bike-share trips. Kong et al. first classify stations of trip origin and destination by their accessibility to public transit hubs, including subway stations and bus stops, into three categories. Label A for stations within 100 meters of a subway station or bus stop; label B when less than 400 meters; and label C when outside the 400 meters buffer which is believed to be outside the public transit service area.

Based on the station categories and the trip duration, a rule-based classification tree is deployed to assign each bike trip with one of the three mode semantics: MS, MI and MC. MS represents a relatively long trip that starts and ends close to public transit. MI refers to short trips that start or end close to public transit and represent bike trips that are probably from a combined mode of bike share and public transit. MC include two cases: Long trips or trips with multiple public transit transfers that must start and end close to public transit; second, any trip that starts and ends far from public transit.

### Results

The classification system is applied to daily trips of 2019 and 2020. Results of 2019 show that before COVID-19, most trips are integration or substitution with PT and less than 10 percent of total trips are complementation of PT. Winter has less MI trips than MS while during summer times MI and MS have the same share. In 2020 after the COVID-19 Results show that there is an increase in the mode substitution and decrease in the mode integration after the outbreak in April 2020. This can result longer trip duration. But the increase of MS trips are mostly on weekend which is shown as the red spikes. This means people take more longer trips during weekends which is different from 2019 patterns.

![Trip semantics in 2019](/static/uploads/trip_by_label_2019.svg)

![Trip semantics in 2020](/static/uploads/trip_by_label_2020.svg)

The result provides an encouraging evidence that demonstrates a shift from public transit to bike trips. In the second part, the explanation of the substitution is discussed by exploring some heuristic reasons. Intuitively the reasons are the health concern, the extra delay from reduced services and free membership program. Some background of free membership is that during the first two months of COVID-19, free one year membership of Citibike was granted to healthcare workers in NYC. 
The influence of free membership was discussed in the two other papers, so I focused on the first two in this research. Our method is to collect delay information of PT and travel time matrix of PT and BSS

![](/static/uploads/delay_covid_timeseries.svg)

The travel time matrix compare the time trade-off between same origin and destination. From the left two heatmaps, Normally, bike trips happens when it can save more time than PT. For example, the dark blue means for the origin destination that take 16 min with BSS, it would take 20 minutes for PT. From the difference of trip distribution between two periods, we know more bike trips are made even PT has shorter trip time. Also overall, bike trip save 5.5 minutes before COVID but only save 4.6 min during the COVID. Both findings upvote the health concern reason.

![travel time difference in public transit and bike-share](/static/uploads/pt_bss_time_density_diff.svg)

### Discussion
To summarize, Mode semantics classification and explorative data analysis on various hypotheses help to confirm an increase in the substitution of bike-share over public transit as the reason of longer trip duration in COVID-19.
Between the reasons of delay and health concern, this substitution is less possible due to the delay of PT as the short period of delay doesn’t overlap the longer substitution period. While it is more possible due to the health concern as #1 the average trip time saving of bike-share decrease and #2 longer bike trip replacing PT still happened after the resume of regular PT service.
The work is in progress and expected to add more quantitative analysis to get a better understanding of the explanatory factors.
Limitations: 1) no ground truth for the semantics interpretation; 2) other possible factors to increase the usage of BSS such as: less traffic on road - bike lane is safer to use.  Third Delay analysis is simplified as we don’t have a full archive of delay history. We are looking forward to see if there are any data sources with such information.

### References
- Teixeira, J. F., & Lopes, M. (2020). The link between bike sharing and subway use during the COVID-19 pandemic: The case-study of New York’s Citi Bike. Transportation Research Interdisciplinary Perspectives, 6, 100166. https://doi.org/10.1016/j.trip.2020.100166
- Padmanabhan, V., Penmetsa, P., Li, X., Dhondia, F., Dhondia, S., & Parrish, A. (2021). COVID-19 effects on shared-biking in New York, Boston, and Chicago. Transportation Research Interdisciplinary Perspectives, 9, 100282. https://doi.org/10.1016/j.trip.2020.100282
- Wang, H., & Noland, R. B. (2021). Bikeshare and subway ridership changes during the COVID-19 pandemic in New York City. Transport Policy, 106, 262–270. https://doi.org/10.1016/j.tranpol.2021.04.004
- Heydari, S., Konstantinoudis, G., & Behsoodi, A. W. (2021). Effect of the COVID-19 pandemic on bike-sharing demand and hire time: Evidence from Santander Cycles in London. PLOS ONE, 16(12), e0260969. https://doi.org/10.1371/journal.pone.0260969
- Li, A., Zhao, P., Haitao, H., Mansourian, A., & Axhausen, K. W. (2021). How did micro-mobility change in response to COVID-19 pandemic? A case study based on spatial-temporal-semantic analytics. Computers, Environment and Urban Systems, 101703. https://doi.org/10.1016/j.compenvurbsys.2021.101703
- Kubaľák, S., Kalašová, A., & Hájnik, A. (2021). The Bike-Sharing System in Slovakia and the Impact of COVID-19 on This Shared Mobility Service in a Selected City. Sustainability, 13(12), 6544. https://doi.org/10.3390/su13126544
- Pase, F., Chiariotti, F., Zanella, A., & Zorzi, M. (2020). Bike Sharing and Urban Mobility in a Post-Pandemic World. IEEE Access, 8, 187291–187306. https://doi.org/10.1109/ACCESS.2020.3030841
- Kong, H., Jin, S. T., & Sui, D. Z. (2020). Deciphering the relationship between bikesharing and public transit: Modal substitution, integration, and complementation. Transportation Research Part D: Transport and Environment, 85, 102392. https://doi.org/10.1016/j.trd.2020.102392
