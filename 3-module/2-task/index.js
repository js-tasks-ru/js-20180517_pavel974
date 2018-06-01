let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = new Date( this.from.getFullYear(), this.from.getMonth(), this.from.getDate()).valueOf();
    let last = new Date( this.to.getFullYear(), this.to.getMonth(), this.to.getDate()).valueOf();

    return {
        next() {

            if (current !== last) {

                current += 86400000; // 86400000 day in ms

                let thisDate = new Date(current);
                let result = `${thisDate.getDate()}`;

                if (thisDate.getDate() < 10) {
                    result = `0${result}`
                }
                if (thisDate.getDay() === 0 || thisDate.getDay() === 6) {
                    result = `[${result}]`;
                }

                return {
                    done: false,
                    value: result
                };

            } else {
                return {
                    done: true
                }
            }

        }
    }
};
