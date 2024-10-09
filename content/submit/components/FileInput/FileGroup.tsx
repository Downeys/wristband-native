import React from 'react'
import { View, Text } from 'react-native';
import FileItem from './FileItem';

interface FileGroupProps {
    groupName: string;
    files: File[];
    onRemoveFile: (fileName: string) => void;
}

export const FileGroup = ({ groupName, files, onRemoveFile }: FileGroupProps) => {
    if (!files.length) return null;
    return (
        <View className="w-full flex flex-col p-2">
            <Text className='text-white text-lg font-primary w-full'>{groupName}</Text>
            {files.map(file => <FileItem onRemoveFile={onRemoveFile} name={file.name} size={file.size} />)}
        </View>
    )
}

export default FileGroup;