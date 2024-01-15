#include<iostream>
using namespace std;
int main()
{
    int num,rev=0,rem,originalnumber ;
    cout<<"enter the number: ";
    cin>>num;
    originalnumber=num;
   
   while(num>0)
   {
    rem=num%10;
    num=num/10;
    rev=rev*10+rem;
   }
   if(originalnumber==rev)
   {
    cout<<"is a palindrone number";
   }
   else
   {
    cout<<"is not a palindrone number";
   }
  
    return 0;
}