function skillsMember() {
    const member = {
        name: 'Member',
        description: 'A member of the team',
        skills: [
            {
                name: 'Member',
                description: 'A member of the team',
                level: 1,
                cost: 0,
                maxLevel: 1,
                requires: [],
                available: true,
                selected: false,
                type: 'member',
                icon: 'member',
                iconType: 'default',
                iconSet: 'default',
                id: 'Member',
                skillId: 'Member',
                row: 0,
                index: 0,
                parent: null,
                isRoot: true,
                isLeaf: true,
                children: [],
            },
        ],
    };
    return member;
}