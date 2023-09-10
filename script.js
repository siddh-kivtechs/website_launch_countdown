const body = document.body
      content = document.createElement('main'),
      countdownContainer = document.createElement('div'),
      countdownDataContainer = document.createElement('div'),
      headingContainer = document.createElement('div'),
      headingText = document.createElement('h1'),
      dayContainer = document.createElement('div'),
      hourContainer = document.createElement('div'),
      minuteContainer = document.createElement('div'),
      secondContainer = document.createElement('div'),
      dayContainerDateText = document.createElement('div'),
      hourContainerDateText = document.createElement('div'),
      minuteContainerDateText = document.createElement('div'),
      secondContainerDateText = document.createElement('div'),
      dayTextContainer = document.createElement('div'),
      hourTextContainer = document.createElement('div'),
      minuteTextContainer = document.createElement('div'),
      secondTextContainer = document.createElement('div'),
      dayPara = document.createElement('p'),
      hourPara = document.createElement('p'),
      minutePara = document.createElement('p'),
      secondPara = document.createElement('p');

body.append(content);
headingContainer.append(headingText);
countdownDataContainer.append(dayContainer, hourContainer, minuteContainer,secondContainer)
countdownContainer.append(headingContainer,countdownDataContainer);
content.append(countdownContainer);

dayContainer.append(dayContainerDateText,dayTextContainer);
hourContainer.append(hourContainerDateText, hourTextContainer);
minuteContainer.append(minuteContainerDateText, minuteTextContainer);
secondContainer.append(secondContainerDateText, secondTextContainer);

headingText.textContent = 'WEBSITE will be LIVE ';
dayPara.textContent = 'DAYS'
hourPara.textContent = 'HOURS'
minutePara.textContent = 'MINUTES';
secondPara.textContent = 'SECONDS';

dayTextContainer.append(dayPara);
hourTextContainer.append(hourPara);
minuteTextContainer.append(minutePara);
secondTextContainer.append(secondPara);

content.classList.add('main--content-container');
countdownContainer.classList.add('countdown--container');
headingContainer.classList.add('countdown--heading-container');
countdownDataContainer.classList.add('countdown--data-container');
dayContainer.classList.add('countdown--day-container');
hourContainer.classList.add('countdown--hour-container');
minuteContainer.classList.add('countdown--minute-container');
secondContainer.classList.add('countdown--seconds-container');
dayContainerDateText.classList.add('countdown--date-text');
hourContainerDateText.classList.add('countdown--date-text');
minuteContainerDateText.classList.add('countdown--date-text');
secondContainerDateText.classList.add('countdown--date-text');

const DateTime = luxon.DateTime,
      Interval = luxon.Interval;
      hoursInDay = 24,
      minutesInHour = 60,
      secondsInMinute = 60;

const addZero = time => time < 10 ? `0${time}` : `${time}`; 

const timeData = () => {
    let currentYear = DateTime.now().year,
        yearGoal = currentYear + 1, // will always take into account the fact that years pass
        now = DateTime.now(),
        //later = DateTime.local(yearGoal, 01, 01),
        later=new Date('2023-10-25'),
        i = Interval.fromDateTimes(now,later),
        currentHour = hoursInDay - now.hour,
        currentMinutes = minutesInHour - now.minute,
        currentSeconds = secondsInMinute - now.second;
        console.log(now)
    const showTime = () => {
        dayContainerDateText.innerHTML = `<p>${addZero(i.length('days').toFixed(0))}:</p>`;
        hourContainerDateText.innerHTML = `<p>${addZero(currentHour)}:</p>`;
        minuteContainerDateText.innerHTML = `<p>${addZero(currentMinutes)}:</p>`;
        secondContainerDateText.innerHTML = `<p>${addZero(currentSeconds)}</p>`;
    }
    showTime();
};

setInterval( () => timeData(), 1000);

window.onload = () => timeData();