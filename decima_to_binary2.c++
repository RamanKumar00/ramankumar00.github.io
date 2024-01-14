#include<iostream>
using namespace std;
int main()
{   

    int num,mul=1,rem,ans=0;
    cout<<"enter the value of num: ";
    cin>>num;
    while(num>0)
    {
        rem=num%2;
        num=num/2;
        ans=rem*mul+ans;
        mul=mul*10;
    }
    cout<<ans;
    return 0;
}