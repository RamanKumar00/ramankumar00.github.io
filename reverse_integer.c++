#include<iostream>
using namespace std;
int main()
{
    int rem,num,ans=0;
    cout<<"enter the value of num: ";
    cin>>num;

    while(num>0)
    {
        rem=num%10;
        num=num/10;
        ans=rem+ans*10;
    }
    cout<<ans;


    return 0;

}