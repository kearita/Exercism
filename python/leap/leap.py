def leap_year(year):
    """Determine whether a given year is a leap year.

    :param year: int - year to determine if it is a leap year
    :return: true if given year is leap year and false otherwise
    """
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)
