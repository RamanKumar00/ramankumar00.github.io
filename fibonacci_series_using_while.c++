#include<iostream>
using namespace std;
int main()
{
    int num,i=1,t1=0,t2=1,nextterm=0;
    cout<<"enter the number of terms: ";
    cin>>num;
    while(i<=num)
    {
        if(i==1)
        {
            cout<<t1<<",";
            i++;
            continue;
        }
        if(i==2)
        {
            cout<<t2<<",";
            i++;
            continue;
        }
        nextterm=t1+t2;
        t1=t2;
        t2=nextterm;
        cout<<nextterm<<",";
        i++;
        

    }
    return 0;
}