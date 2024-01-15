#include<iostream>
using namespace std;
int main()
{
    int year;
    cout<<"enter the year: ";
    cin>>year;

    if(year%400==0)
    {
        cout<<"it is a leap year";
    }
    else if(year%4==0 && year%100!=0)
    {
        cout<<" it is leap year";
    }
    else(
        cout<<"it is not a leap year");
    return 0;
}