function isLeapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

years = 2020

for (let i = 0; i < 30; i++) {
    console.log(isLeapYear(years + i))
    
}