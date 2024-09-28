import React from 'react';
import { RealmProvider } from "@realm/react";
import { Track } from '../../../../models/Track';


export const RealmContextProvider = ({ children }: { children: React.ReactNode }) => {
    return <RealmProvider
            schema={[Track]}
            sync={{
                flexible: true,
                initialSubscriptions: {
                    update: (mutableSubs, realm) => {
                        mutableSubs.add(realm.objects('track'));
                    },
                },
                onError: (session, error) => {
                    console.error(error.message);
                },
            }}
        >
            {children}
        </RealmProvider>
}

export default RealmContextProvider;